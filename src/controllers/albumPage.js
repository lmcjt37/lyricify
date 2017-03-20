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
import { searchTracks } from '../utils/api';

import ListItem from '../components/listItem';

export default class AlbumPage extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            tracks: dataSource
        };
    }

    getTracks = () => {
        const { album_id } = this.props.data;
        searchTracks(album_id)
            .then(result => {
                this.setState({
                    tracks: this.state.tracks.cloneWithRows(result)
                });
            })
            .catch((error) => {
                throw error;
            });
    };


    renderTrackRow = (data) => {
        const { navigator } = this.props;
        const { track_name, track_id } = data.track;
        const track_state = {
            id: "LYRIC_PAGE",
            title: track_name,
            data: {
                track_id
            }
        };
        return (
            <ListItem
                title={ track_name }
                id={ track_id }
                navigator={ navigator }
                navState={ track_state }
            />
        );
    };

    componentWillMount() {
        this.getTracks();
    }

    render() {
        const { tracks } = this.state;
        return (
            <View style={ Styles.container }>
                <StatusBar
                    backgroundColor={ Colours.blue }
                    barStyle="light-content"
                />

                <ListView
                    dataSource={ tracks }
                    renderRow={ this.renderTrackRow }
                    style={ Styles.listView }
                />

            </View>
        );
    }
};
