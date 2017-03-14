import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import Styles from '../styles/style';

const ListItem = ({ index, title, subtitle }) => {
    return (
        <TouchableOpacity>
            <Text style={ Styles.listItemTitle }>{ title }</Text>
            <Text style={ Styles.listItemSubtitle }>{ subtitle }</Text>
        </TouchableOpacity>
    );
};

export default ListItem;
