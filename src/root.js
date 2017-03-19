import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Home from "./controllers/home";
import ArtistPage from "./controllers/artistPage";
import AlbumPage from "./controllers/albumPage";
import LyricPage from "./controllers/lyricPage";

import NavigationBar from './components/navigationBar'

import Styles from './styles/style';

export default class Root extends Component {

  renderScene(route, navigator) {
      switch(route.id) {
          case "HOME":
              return (
                  <Home navigator={navigator} />
              );
          case "ARTIST_PAGE":
              return (
                  <ArtistPage
                      data={ route.data }
                      title={ route.title }
                      navigator={navigator}
                  />
              );
          case "ALBUM_PAGE":
              return (
                  <AlbumPage
                      data={ route.data }
                      title={ route.title }
                      navigator={navigator}
                  />
              );
          case "LYRIC_PAGE":
              return (
                  <LyricPage
                      data={ route.data }
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
