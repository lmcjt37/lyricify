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
import { debounce } from 'lodash';
import { search } from '../utils/api';

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

    getArtists(query) {
        debounce(() => {
            searchArtist(query)
                .then(result => {
                    const artists = result.message.body.artist_list;
                    this.setState({
                        artists: this.state.artists.cloneWithRows(artists)
                    });
                })
                .catch((error) => {
                    throw error;
                });
        }, 500);
    }

    renderArtistRow(id, artist) {
        return (
            <ListItem
                id={ id }
                title={ artist.artist_name }
                subtitle={ artist.artist_id }
            />
        );
    }

    render() {
        const { artists } = this.state;
        return (
            <View style={ Styles.container }>
                <StatusBar
                    backgroundColor="#0D1CF2"
                    barStyle="light-content"
                />

                <TextInput
                    style={ Styles.searchBar }
                    onChangeText={ this.getArtists }
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
