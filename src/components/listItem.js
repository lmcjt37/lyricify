import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Styles from '../styles/style';

const ListItem = ({ title, image, navState, navigator }) => {
    // if (image) {
    //     return (
    //         <TouchableOpacity
    //             style={ Styles.listViewItem }
    //             onPress={ () => navigator.push(navState)}
    //             >
    //             <View style={ Styles.listViewItemInnerContainer }>
    //                 <Image
    //                     style={ Styles.listViewItemImage }
    //                     source={{ uri: image }}
    //                 />
    //                 <Text style={ Styles.listViewItemTitle }>{ title }</Text>
    //             </View>
    //         </TouchableOpacity>
    //     );
    // } else {
        return (
            <TouchableOpacity
                style={ Styles.listViewItem }
                onPress={ () => navigator.push(navState)}
                >
                <Text style={ Styles.listViewItemTitle }>{ title }</Text>
            </TouchableOpacity>
        );
    // }
};

export default ListItem;
