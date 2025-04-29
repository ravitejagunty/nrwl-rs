// src/store/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state: { value: number }) {
      state.value += 1;
    },
    decrement(state: { value: number }) {
      state.value -= 1;
    },
    incrementByAmount(state: { value: number }, action: { payload: number }) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;