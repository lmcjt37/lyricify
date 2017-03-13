import React from 'react';
import {
    ListView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import Styles from './styles/style';
import { debounce } from 'lodash';
import { search } from './utils/api';

import ListItem from './components/listItem';

export default class Home extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.dataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            songs: dataSource
        };
    }

    getSongs(query) {
        debounce(() => {
            search(query)
                .then(songs => {
                    this.setState({
                        songs: this.state.songs.cloneWithRows(songs)
                    });
                })
                .catch((error) => {
                    throw error;
                });
        }, 500);
    }

    renderRow(id, song) {
        return (
            <ListItem
                id={ id }
                title={ song.name }
                subtitle={ song.artist }
            />
        );
    }

    render() {
        const { songs } = this.state;
        return (
            <View style={ Styles.container }>
                <StatusBar
                    backgroundColor="#0D1CF2"
                    barStyle="light-content"
                />

                <TextInput
                    style={ Styles.searchBar }
                    onChangeText={ this.getSongs }
                />

                <ListView
                    dataSource={ songs }
                    renderRow={ this.renderRow }
                    style={ Styles.listView }
                />

            </View>
        );
    }
};
