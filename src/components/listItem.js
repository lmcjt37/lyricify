import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import Styles from '../styles/style';

const ListItem = ({ title, navState, navigator }) => {
    return (
        <TouchableOpacity
            style={ Styles.listViewItem }
            onPress={ () => navigator.push(navState)}
            >
            <Text style={ Styles.listViewItemTitle }>{ title }</Text>
        </TouchableOpacity>
    );
};

export default ListItem;
