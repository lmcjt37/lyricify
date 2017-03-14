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
import { debounce } from 'lodash';
import { searchArtist } from '../utils/api';

import ListItem from '../components/listItem';

export default class Home extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            artists: dataSource
        };
    }

    getArtists = debounce((query) => {
        searchArtist(query)
            .then(result => {
                this.setState({
                    artists: this.state.artists.cloneWithRows(result)
                });
            })
            .catch((error) => {
                throw error;
            });
    }, 400);

    renderArtistRow = (data) => {
        const { navigator } = this.props;
        const { artist_name } = data.artist;
        const artist_state = {
            id: "ARTIST_PAGE",
            title: artist_name
        };
        return (
            <ListItem
                title={ artist_name }
                navigator={ navigator }
                navState={ artist_state }
            />
        );
    };

    render() {
        const { artists } = this.state;
        return (
            <View style={ Styles.container }>
                <StatusBar
                    backgroundColor={ Colours.blue }
                    barStyle="light-content"
                />

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={ false }
                    onChangeText={ this.getArtists }
                    placeholder="Search artist"
                    placeholderTextColor={ Colours.transWhite }
                    style={ Styles.searchBar }
                />

                <ListView
                    dataSource={ artists }
                    renderRow={ this.renderArtistRow }
                    style={ Styles.listView }
                />

            </View>
        );
    }
};
