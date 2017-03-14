import { Platform, StyleSheet } from 'react-native';

import Colours from '../configs/colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.offWhite
  },
  navigation: {
      ...Platform.select({
          ios: {
              paddingTop: 64
          },
          android: {
              paddingTop: 44
          }
      })
  },
  navigationBar: {
    alignItems: 'center',
    backgroundColor: Colours.blue,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navBarTitle: {
      color: Colours.white,
      fontSize: 17,
      paddingTop: 8
  },
  leftNavBarButton: {
      marginLeft: 10,
      paddingTop: 10
  },
  navBarButtonText: {
      color: Colours.white,
      fontSize: 16
  },
  searchBar: {
      backgroundColor: Colours.blue,
      color: Colours.white,
      height: 44,
      top: 0,
      paddingHorizontal: 10
  },
  listView: {
      flex: 1
  },
  listViewItem: {
      alignItems: 'flex-start',
      flex: 1,
      flexWrap: "wrap",
      minHeight: 44,
      justifyContent: 'center'
  },
  listViewItemTitle: {
      color: Colours.black,
      flex: 1,
      fontSize: 17,
      paddingHorizontal: 10,
      paddingVertical: 15
  }
});

export default styles;
