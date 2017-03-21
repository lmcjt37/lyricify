import React, { Component } from 'react';
import {
    ListView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Styles from '../styles/style';
import Colours from '../configs/colours';
import { debounce } from 'lodash';
import { searchArtists } from '../utils/api';

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
        searchArtists(query)
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
        const { artist_name, artist_id } = data.artist;
        const artist_state = {
            id: "ARTIST_PAGE",
            title: artist_name,
            data: {
                artist_id
            }
        };
        return (
            <ListItem
                title={ artist_name }
                id={ artist_id }
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

                <View style={ Styles.searchBarContainer }>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={ false }
                        onChangeText={ this.getArtists }
                        placeholder="Search artist"
                        placeholderTextColor={ Colours.transWhite }
                        style={ Styles.searchBar }
                    />
                    <Icon
                        name="search"
                        size={20}
                        color={ Colours.white }
                        style={ Styles.searchBarIcon }
                    />
                </View>

                <ListView
                    dataSource={ artists }
                    renderRow={ this.renderArtistRow }
                    style={ Styles.listView }
                />

            </View>
        );
    }
};
