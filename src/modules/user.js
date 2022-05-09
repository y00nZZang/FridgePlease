import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { login, register } from '../lib/api/auth';

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({ name, id, passwd }, thunkAPI) => {
    try {
      const response = await register({ name, id, passwd });
      return response.data;
      /*
      const { data } = response;
      console.log('data', data);
      if (response.status === 200) {
        // localStorage.setItem('token', data.token);
        return { ...data, username: name, email };
      }
      return thunkAPI.rejectWithValue(data);
      */
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({ id, passwd }, thunkAPI) => {
    try {
      const response = await login({ id, passwd });
      return response.data;
      /*
      const { data } = response;
      console.log('data', data);
      if (response.status === 200) {
        // localStorage.setItem('token', data.token);
        return { ...data, username: name, email };
      }
      return thunkAPI.rejectWithValue(data);
      */
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const clearState = () => {};

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    name: '',
    id: '',
  },
  reducers: {
    // Reducer comes here
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.id = action.payload.id;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.id = action.payload.id;
      });
  },
});

export const userSelector = state => state.user;
