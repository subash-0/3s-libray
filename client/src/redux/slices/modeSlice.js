// src/reducers/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false, // Default to light mode
    reducers: {
        toggleDarkMode: state => !state,
        enableDarkMode: () => true,
        disableDarkMode: () => false,
    },
});

export const { toggleDarkMode, enableDarkMode, disableDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
