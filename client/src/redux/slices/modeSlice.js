// src/reducers/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false, // Default to light mode
    reducers: {
        toggleDarkMode: state => !state,
       
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
