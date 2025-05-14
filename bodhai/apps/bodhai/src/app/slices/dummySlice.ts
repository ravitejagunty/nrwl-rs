import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface User {
  name: string | null;  
  email: string | null;
}
// Define the initial state using that type

const initialState: { dummyUser: User } = {
  dummyUser: { name: null, email: null }
};

const dummySlice = createSlice({
    name: 'userData',
    initialState,
    reducers:{
        dummyUserData: (state, action) => {
            state.dummyUser = action.payload;
        },
        setUserData: (state, action) => {
            state.dummyUser = action.payload;
        }
    }
})

export const { dummyUserData, setUserData } = dummySlice.actions;
export default dummySlice.reducer;