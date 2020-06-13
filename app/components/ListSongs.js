import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import  * as Animatable from 'react-native-animatable';
import styles from './ComponentStyles/ListSongs';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from 'react-native-elements';
import { device } from '../config/ScreenDimensions';
import { songs } from '../data/data';

export default class ListSongs extends React.Component {
  state = {
    dayOffset: '',
    playlist: []
  }

  getDayOffset = time => {
    const timeOffset = ((Date.now()) - time)/1000;
    if (timeOffset < 86400) {
      return 'Hôm nay';
    } else if (timeOffset < 172.800){
      return 'Hôm qua';
    } else if (timeOffset < 259200){
      return 'Hôm kia';
    } else if (timeOffset < 604800){
      return `${Math.floor(timeOffset/86400)} ngày trước`
    } else if (timeOffset < 2592000){
      return `${Math.floor(timeOffset/604800)} tuần trước`
    } else return new Date(time).toLocaleString();
  }

  playSong = index => {
    this.props.navigate("Player", {songPos: index, playlist: this.state.playlist});
  }
  
  renderItem = ({item, index}) => {
    let itemDayOffset = this.getDayOffset(item.latestListening);
    let showDayOffset = false;
    if ((this.props.type==='history')&&(itemDayOffset!==this.state.dayOffset)){
      showDayOffset = true;
      this.state.dayOffset = itemDayOffset;
    }
    return(
      <View>
        {showDayOffset ?
        <View style={styles.dayOffsetContainer}>
          <Text style={styles.dayOffset}>{itemDayOffset}</Text>
        </View> : 
        null }
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.playSong(index);
            item.latestListening = new Date().getTime();
            this.setState({dayOffset: ''});
          }}  
        >
        <View style={styles.container}>
          <Image style={styles.image} source = {{uri: item.picture}}/>
          <View style={styles.songInfoContainer}>
            <View style={styles.songNameContainer}>
              <Text style={styles.songName}>{item.name}</Text>
            </View>
            <View style={styles.singerContainer}>
              <Text style={styles.singer}>{item.singer}</Text>
            </View>
            {this.props.type==='favorite' ? 
            <View style={styles.favoriteIcon}>
              <Icon name="favorite" size={device.width*0.08} color='#D50000'/>
            </View> : 
            null}
          </View>  
          <View style={styles.optionIcon}>
            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" size={device.width*0.08} />
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={{width: 100}}>
                <MenuOption onSelect={() => alert(`Tùy chọn 1`)} >
                  <Text>Tùy chọn 1</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Tùy chọn 2`)} >
                  <Text>Tùy chọn 2</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Tùy chọn 3`)} >
                  <Text>Tùy chọn 3</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    if (this.props.type === 'songs'){
      this.state.playlist = songs.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        return nameA.localeCompare(nameB);
      });
    } else if (this.props.type === 'favorite') {
      this.state.playlist = songs.filter(item => item.favorite==1)
    } else if (this.props.type === 'history') {
      this.state.playlist = songs.sort((a, b) => b.latestListening - a.latestListening);
    }
    return (
      <FlatList
        data={this.state.playlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
        style={styles.flatList}
      />
    )
  }
}
