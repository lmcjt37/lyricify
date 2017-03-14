import React from 'react';
import {
    Navigator,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Styles from '../styles/style';

export default (
    <Navigator.NavigationBar
        routeMapper={{
            LeftButton: (route, navigator) => {
                if (route.id === "HOME") {
                    return (
                        <View style={Styles.leftNavBarButton}>
                            <Text style={Styles.navBarTitle}>{route.title}</Text>
                        </View>
                    );
                }
                return (
                    <TouchableOpacity
                        onPress={() => navigator.pop()}
                        style={Styles.leftNavBarButton}
                        >
                        <Text style={Styles.navBarButtonText}>
                            {'<'}{route.title}
                        </Text>
                    </TouchableOpacity>
                );
            },
            Title: () => {
                return null;
            },
            RightButton: () => {
                return null;
            }
        }}
        style={ Styles.navigationBar }
    />
);
