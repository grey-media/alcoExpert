import { combineReducers } from 'redux';
import appData from './data';
import profileData from './profile';

export default combineReducers({
  appData,
  profileData,
});
