import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Home from "./controllers/home";
import LyricPage from "./controllers/lyricPage";
import ArtistPage from "./controllers/artistPage";

import NavigationBar from './components/navigationBar'

import Styles from './styles/style';

export default class Root extends Component {

  renderScene(route, navigator) {
      switch(route.id) {
          case "HOME":
              return (
                  <Home navigator={navigator} />
              );
          case "LYRIC_PAGE":
              return (
                  <LyricPage
                      title={ route.title }
                      navigator={navigator}
                  />
              );
          case "ARTIST_PAGE":
              return (
                  <ArtistPage
                      title={ route.title }
                      navigator={navigator}
                  />
              );
      }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ "id": "HOME", "title": "Lyricify" }}
        renderScene={ this.renderScene }
        navigationBar={ NavigationBar }
        style={ Styles.navigation }
      />
    );
  }
}
