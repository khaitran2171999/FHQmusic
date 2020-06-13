import React from 'react';
import { SafeAreaView, View, ScrollView, StatusBar } from 'react-native';
import styles from '../styles/Home';
import SearchBar from '../components/SearchBar';
import Item from '../components/Item';
import {singerData, playListData, topicData, forYou} from '../data/data';
import MiniPlayer from '../components/MiniPlayer';

export default class Home extends React.Component {
  render(){
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: '#0D47A1', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <StatusBar barStyle="default" translucent/>
            <View>
              <SearchBar navigation={this.props.navigation}/>
            </View>
            <ScrollView style={styles.scrollView}>
              <Item
                category="Dành cho bạn"
                data={forYou}
                horizontal={true}
                itemAreaStyle={styles.suggestArea}
                itemPictureStyle={styles.suggestPicture}
                itemNameStyle={styles.suggestText}
                itemStyle={styles.suggestStyle}
              />
              <Item 
                category="Playlist"
                data={playListData}
                horizontal={true}
                scrollEnabled={false}
              />
              <Item 
                category="Ca sĩ" 
                data={singerData}
                horizontal={true}
                scrollEnabled={false}
                itemPictureStyle={styles.singerPictureStyle}
                itemStyle={styles.singerStyle}
              />
              <Item 
                category="Chủ đề"
                data={topicData}
                horizontal={true}
              />
            </ScrollView>
          </View>
          <MiniPlayer navigate={this.props.navigation.navigate}/>
        </View>
      </SafeAreaView>
    );
  }
}