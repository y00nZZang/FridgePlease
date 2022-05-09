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
};

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: true,
  preloadedState,
});
