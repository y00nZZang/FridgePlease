import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userSlice } from './user';

const reducer = {
  user: userSlice.reducer,
};

const preloadedState = {
  user: {
    name: '',
    id: '',
  },
  items: [
    {
      key: '',
      name: '',
      mfgDate: '',
      expDate: '',
      category: '',
      subCategory: '',
      countable: true,
      frozen: false,
      totalVol: null,
      curVol: null,
      memo: '',
      imgSrc: '',
    },
  ],
};

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: true,
  preloadedState,
});
