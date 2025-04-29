// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

// Type helpers (optional, but best practice)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;