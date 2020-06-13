import {combineReducers} from 'redux';
import { player, updateSong } from './player';

export default combineReducers({
  player: player,
  updateSong: updateSong
});