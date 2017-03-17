import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import Styles from '../styles/style';

export default class ArtistPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return (
            <View style={ Styles.container }>
                <Text>{title}</Text>
            </View>
        );
    }
};
