import React from 'react';
import {
    Navigator,
    Platform,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Styles from '../styles/style';
import Colours from '../configs/colours';

export default (
    <Navigator.NavigationBar
        routeMapper={{
            LeftButton: (route, navigator) => {
                if (route.id === "HOME") {
                    return null;
                }
                if (Platform.OS === 'ios') {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={Styles.leftNavBarButton}
                            >
                            <Text style={Styles.navBarButtonText}>Back</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={Styles.leftNavBarButton}
                            >
                            <Icon name="arrow-back" size={20} color={ Colours.white } />
                        </TouchableOpacity>
                    );
                }
            },
            Title: (route) => {
                return (
                    <Text style={Styles.navBarTitle}>{route.title}</Text>
                );
            },
            RightButton: () => {
                return null;
            }
        }}
        style={ Styles.navigationBar }
    />
);
