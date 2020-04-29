import React from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ListItem } from 'react-native-elements'
import styles from '../styles/Personal';
import SearchBar from '../components/SearchBar';

const list = [
  {
    title: 'Danh sách bài hát',
    icon: 'headset',
    type: 'songs',
  },
  {
    title: 'Danh sách yêu thích',
    icon: 'favorite',
    type: 'favorite',
  },
  {
    title: 'Lịch sử nghe nhạc',
    icon: 'history',
    type: 'history',
  },
]

export default class Personal extends React.Component {
  render(){
    const {navigate} = this.props.navigation;
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" translucent/>
        <View>
          <SearchBar/>
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Cá nhân</Text>
        </View>
        <View style={{backgroundColor: 'white'}}>
        {list.map((item, i) => {
          return (
            <Animatable.View key={i} animation="fadeInDown" delay={i*100} duration={500}>
              <TouchableOpacity 
                onPress={()=> navigate('SongList', {title: item.title, type: item.type})}
                activeOpacity={0.3}
              >
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                />
              </TouchableOpacity>
            </Animatable.View>  
          )
        })
      }
        </View>
      </SafeAreaView>
    );
  }
}