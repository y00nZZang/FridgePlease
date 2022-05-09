import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { initializeItem } from '../lib/api/item';

export const getItems = createAsyncThunk(
  'items/getItems',
  async ({ id }, thunkAPI) => {
    try {
      console.log(id);
      const response = await initializeItem({ id });
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

export const itemSlice = createSlice({
  name: 'items',
  initialState: {},
  reducers: {
    itemList: [],
    // Reducer comes here
  },
  extraReducers: builder => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.itemList.append(action.payload);
    });
  },
});

export const userSelector = state => state.item;
