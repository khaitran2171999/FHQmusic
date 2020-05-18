import {StyleSheet} from 'react-native';
import {device} from '../config/ScreenDimensions'

export default StyleSheet.create({
  container: {
    backgroundColor: '#0D47A1', 
  },
  scrollView: {
    height: device.height*0.81,
    backgroundColor: '#E0E0E0'
  },
  suggestArea: {
    marginTop: device.height*0.01,
    height: device.height*0.38,
    width: device.width,
    backgroundColor: 'white'
  },
  suggestPicture: {
    height: device.height*0.32,
    width: device.width,
  },
  suggestText: {
    height: 0,
    width: 0,
  },
  singerPictureStyle: {
    height: device.height*0.13,
    width: device.height*0.13,
    borderRadius: device.height*0.13*0.5
  },
  singerStyle: {
    marginLeft: (device.width-device.height*0.13*3)/4
  },
  suggestStyle: {
   marginLeft: 0 
  }
});