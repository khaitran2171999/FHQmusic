import React from 'react';
import { SafeAreaView, View, ScrollView, StatusBar } from 'react-native';
import styles from '../styles/Home';
import SearchBar from '../components/SearchBar';
import Item from '../components/Item';

const playListData = [
  {picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
  name: 'Playlist 1'},
  {picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
  name: 'Playlist 2'},
  {picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
  name: 'Playlist 3'}
];

const singerData = [
  {picture: 'https://cdn.voh.com.vn/voh/Image/2018/12/20/113569468787218822010901725631029n2_20181220132032.jpg',
  name: 'Ca sĩ 1'},
  {picture: 'https://cdn.voh.com.vn/voh/Image/2018/12/20/113569468787218822010901725631029n2_20181220132032.jpg',
  name: 'Ca sĩ 2'},
  {picture: 'https://cdn.voh.com.vn/voh/Image/2018/12/20/113569468787218822010901725631029n2_20181220132032.jpg',
  name: 'Ca sĩ 3'}
];

const forYou = [
  {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
  {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
  {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
  {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
  {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'}
];

export default class Home extends React.Component {
  render(){
    return(
      <SafeAreaView style={styles.container}>
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
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}