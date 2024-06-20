// src/reducers/index.js
import { combineReducers } from 'redux';
import darkModeReducer from '../slices/modeSlice';
import authReducer from '../slices/authSlice';
import bookReducer from '../slices/bookSlice';
import visitorReducer from '../slices/visitorSlice';
import issueBookReducer from '../slices/issueBookSlice';

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    auth: authReducer,
    book : bookReducer,
    visitor: visitorReducer,
    issuedBook: issueBookReducer
});

export default rootReducer;
