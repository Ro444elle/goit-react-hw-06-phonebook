import { combineReducers } from 'redux';
import contactReducer from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

export default rootReducer;
