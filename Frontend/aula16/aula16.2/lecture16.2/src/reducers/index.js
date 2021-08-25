import { combineReducers } from 'redux';
import movieReducer from './movieReducer.reducer';

const rootReducer = combineReducers({movieReducer});

export default rootReducer;