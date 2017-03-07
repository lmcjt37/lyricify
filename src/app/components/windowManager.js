import React, { Platform, Component } from 'react';
import {
    Navigator,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import styles from '../styles/style';

export default class WindowManager extends Component {
  render() {
      const routes = [
      {title: 'FooBar', message: 'Test page One', index: 0},
      {title: 'BizzBuzz', message: 'Test page Two',  index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
            <TouchableHighlight onPress={() => {
                if (route.index === 0) {
                    navigator.push(routes[1]);
                } else {
                    navigator.pop();
                }
            }}>
                <View>
                    <Text>{route.message}</Text>
                    <Text>Click to do action!</Text>
                </View>
            </TouchableHighlight>
        }
        navigationBar={
            <Navigator.NavigationBar
                routeMapper={{
                    LeftButton: (route, navigator, index, navState) => {
                        if (route.index === 0) {
                            return null;
                        } else {
                            return (
                                <TouchableHighlight onPress={() => navigator.pop()}>
                                    <Text>Back</Text>
                                </TouchableHighlight>
                            );
                        }
                    },
                    RightButton: (route, navigator, index, navState) => {
                        return null;
                    },
                    Title: (route, navigator, index, navState) => {
                        return (<Text>{route.title}</Text>);
                    },
                }}
                style={ styles.navigationBar }
            />
        }
        style={ styles.navigationWindow }
      />
    );
  }
}
