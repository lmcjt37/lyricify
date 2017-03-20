import React, { Component } from 'react';
import {
    ScrollView,
    StatusBar,
    Text,
    View
} from 'react-native';

import Styles from '../styles/style';
import Colours from '../configs/colours';
import { searchLyrics } from '../utils/api';

export default class LyricPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lyrics: "",
            copyright: ""
        };
    }

    getLyrics = () => {
        const { track_id } = this.props.data;
        searchLyrics(track_id)
            .then(result => {
                const lyricsBody = result.lyrics_body ? result.lyrics_body.substring(0, result.lyrics_body.indexOf("***")) : "We don't appear to know the words to this one."
                this.setState({
                    lyrics: lyricsBody,
                    copyright: result.lyrics_copyright ? result.lyrics_copyright : "Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned."
                });
            })
            .catch((error) => {
                throw error;
            });
    };

    componentWillMount() {
        this.getLyrics();
    }

    render() {
        const { lyrics, copyright } = this.state;
        return (
            <View style={ Styles.container }>

                <StatusBar
                    backgroundColor={ Colours.blue }
                    barStyle="light-content"
                />

                <ScrollView contentContainerStyle={ Styles.scrollView }>
                    <Text style={ Styles.lyrics }>{lyrics}</Text>
                </ScrollView>

                <View style={ Styles.copyrightContainer}>
                    <Text style={ Styles.copyright }>{copyright}</Text>
                </View>

            </View>
        );
    }
};
