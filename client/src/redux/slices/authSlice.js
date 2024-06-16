// src/reducers/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        return rejectWithValue('user not found in local storage');
      }

      const user = JSON.parse(userData).username || null;
      const password = JSON.parse(userData).password || null;
      if (user === credentials.username && password === credentials.password) {
        return user;
      } else {
        return rejectWithValue('Invalid Credentials');
      }
    } catch (error) {
      return rejectWithValue('An error occurred during login');
    }
  }
);
export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
    localStorage.setItem('user', JSON.stringify(credentials));
    return 'User Registered Successfully';
      
    } catch (error) {
      return rejectWithValue(error.response.data); 
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
