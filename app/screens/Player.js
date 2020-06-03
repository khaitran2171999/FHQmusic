import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import Slider from 'react-native-slider';
import Moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../styles/Player';


export default class App extends React.Component {
  state = {
    trackLength: 300,
    timeElapsed: "0:00",
    timeRemaining: "5:00"
  };
  changeTime = seconds => {
    this.setState({ timeElapsed: Moment.utc(seconds * 1000).format("m:ss") });
    this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format("m:ss") });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ded5d6"></StatusBar>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons style={styles.downButton} name="ios-arrow-down" size={35}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.song}>Anh thanh niên</Text>
        </View>
        <View style={styles.singer}>
          <Text style={styles.nameSinger}>Huy R</Text>
        </View>
        <View style={styles.image}>
          <Image source={{uri: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg'}} style={styles.imageSong}></Image>
        </View>
        <View style={styles.taskBar}>
          <TouchableOpacity>
            <MaterialIcons name="favorite-border" style={styles.favorite} size={27}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="file-download" style={styles.download} size={27}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="playlist-play" style={styles.list} size={27}></MaterialIcons>
          </TouchableOpacity>
        </View>
        <View style={styles.slider}>
                      <Slider
                          minimumValue={0}
                          maximumValue={this.state.trackLength}
                          trackStyle={styles.track}
                          minimumTrackTintColor="#2e2d2b"
                          maximumTrackTintColor="#f4ece9"
                          onValueChange={seconds => this.changeTime(seconds)}
                      ></Slider>
                      <View style={{ marginTop: -12, flexDirection: "row", justifyContent: "space-between" }}>
                          <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                          <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                      </View>
        </View>
        <View style={styles.control}>
          <TouchableOpacity>
            <Entypo name="shuffle" style={styles.random} size={28}></Entypo>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="skip-previous" style={styles.backward} size={36}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="play-circle-filled" style={styles.pause} size={55}></MaterialIcons> 
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="skip-next" style={styles.forward} size={36}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="loop" style={styles.repeat} size={32}></MaterialIcons>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.commentContainer}>
          <Text style={styles.comment}>Bình luận</Text>
        </ScrollView>
      </View>
    );
    
  }
    
}