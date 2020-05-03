import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import ListSongs from '../components/ListSongs';
import styles from '../styles/SongList';
import Header from '../components/Header';

export default class SongList extends React.Component {
  render(){
    const routeParams = this.props.route.params;
    const {navigate} = this.props.navigation;
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" translucent/>
        <Header 
          pressLeftComponent={() => navigate('TabNavigator')}
          centerText={routeParams.title}
        />
        <View style={styles.songContainer}>
          <ListSongs type={routeParams.type} navigate={navigate}/>
        </View>
      </SafeAreaView>
    );
  }
}
