import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Home from "./controllers/home";
import LyricPage from "./controllers/lyricPage";

import Styles from './styles/style';
import Scenes from './configs/scenes';

export default class Root extends Component {

  renderScene(route, navigator) {
      switch(route.id) {
          case "HOME":
              return (
                  <Home navigator={navigator} />
              );
          case "LYRIC_PAGE":
              return (
                  <LyricPage navigator={navigator} />
              );
      }
  }

  render() {
    return (
      <Navigator
        initialRoute={ Scenes.home }
        renderScene={ this.renderScene }
        navigationBar={ NavigationBar }
        style={ Styles.navigation }
      />
    );
  }
}
