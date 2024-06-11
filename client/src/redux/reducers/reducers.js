// src/reducers/index.js
import { combineReducers } from 'redux';
import darkModeReducer from '../slices/modeSlice';
import authReducer from '../slices/authSlice';

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    auth: authReducer,
});

export default rootReducer;
