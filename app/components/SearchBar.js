import React from 'react';
import { Icon } from 'react-native-elements';
import { View, TextInput, Dimensions } from 'react-native'
import styles from './ComponentStyles/SearchBar';

const screenHeight = Dimensions.get('window').height;

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchText: ''
    }
  }

  updateSearch = searchText => {
    this.setState({searchText})
  }

  render(){
    const {searchText} = this.state;
    return(
      <View style={styles.container}>
        <View style={[styles.searchBarContainer, this.props.style]}>
            <Icon  containerStyle={styles.searchIcon} name="search" size={screenHeight*0.04} color="gray"/>
            <TextInput
              placeholder="Nhập tên bài hát"
              style={styles.searchInput}
              onChangeText={searchText => this.updateSearch(searchText)}
              value={searchText}
            />   
        </View>
        <View style={[styles.profileIcon, this.props.profileIconStyle]}></View>
      </View>
    )
  }
}
