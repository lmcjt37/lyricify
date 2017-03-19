import React, { Component } from 'react';
import {
    ListView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import Styles from '../styles/style';
import Colours from '../configs/colours';
import { searchAlbums } from '../utils/api';

import ListItem from '../components/listItem';

export default class ArtistPage extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            albums: dataSource
        };
    }

    getAlbums = () => {
        const { artist_id } = this.props.data;
        searchAlbums(artist_id)
            .then(result => {
                this.setState({
                    albums: this.state.albums.cloneWithRows(result)
                });
            })
            .catch((error) => {
                throw error;
            });
    };


    renderAlbumRow = (data) => {
        const { navigator } = this.props;
        const { album_name, album_id, album_coverart_100x100: album_image } = data.album;
        const album_state = {
            id: "ALBUM_PAGE",
            title: album_name,
            data: {
                album_id
            }
        };
        return (
            <ListItem
                title={ album_name }
                image={ album_image }
                id={ album_id }
                navigator={ navigator }
                navState={ album_state }
            />
        );
    };

    componentWillMount() {
        this.getAlbums();
    }

    render() {
        const { albums } = this.state;
        return (
            <View style={ Styles.container }>
                <StatusBar
                    backgroundColor={ Colours.blue }
                    barStyle="light-content"
                />

                <ListView
                    dataSource={ albums }
                    renderRow={ this.renderAlbumRow }
                    style={ Styles.listView }
                />

            </View>
        );
    }
};
