import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './itemSlice';

const store = configureStore({
  reducer: {
    inputs: itemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
