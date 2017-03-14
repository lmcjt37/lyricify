import React from 'react';
import {
    Navigator,
    Text,
    TouchableOpacity
} from 'react-native';

import Styles from '../styles/style';

export default (
    <Navigator.NavigationBar
        routeMapper={{
            LeftButton: (route, navigator) => {
                if (route.id === "HOME") {
                    return null;
                }
                return (
                    <TouchableOpacity
                        onPress={() => navigator.pop()}
                        style={Styles.leftNavBarButton}
                        >
                        <Text style={Styles.navBarButtonText}>Back</Text>
                    </TouchableOpacity>
                );
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
