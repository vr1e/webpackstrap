import { combineReducers } from 'redux';
import basicReducer from './basicReducer';

export default combineReducers({
	basic: basicReducer
});
