import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getItemLists } from '../lib/api/item';

export const initItmeLists = createAsyncThunk(
  'items/initItmeLists',
  async ({ id }, thunkAPI) => {
    try {
      const response = await getItemLists({ id });
      const { data } = response;
      if (response.status === 200) {
        return { ...data };
      }
      return thunkAPI.rejectWithValue(data);
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    itemList: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    [initItmeLists.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      payload.itemList.forEach(item => {
        const start = new Date(item.mfgDate);
        const end = new Date(item.expDate);
        const now = Date.now();
        const elapsedRate =
          (end.getTime() - now) / (end.getTime() - start.getTime());
        state.itemList.push({ ...item, elapsedRate });
      });
    },
    [initItmeLists.pending]: state => {
      state.isFetching = true;
    },
    [initItmeLists.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

export const itemSelector = state => state.itemList;
