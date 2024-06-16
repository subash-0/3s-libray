// src/reducers/index.js
import { combineReducers } from 'redux';
import darkModeReducer from '../slices/modeSlice';
import authReducer from '../slices/authSlice';
import bookReducer from '../slices/bookSlice';

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    auth: authReducer,
    book : bookReducer
});

export default rootReducer;
