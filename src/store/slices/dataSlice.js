import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dataSlice = createSlice({
  name: "Data Slice",
  initialState,
  reducers: {
    setSerchedRides:(state,action)=>{
      state.searchedRides = action.payload
    }
  },
});

export const { setSerchedRides } = dataSlice.actions;

export default dataSlice.reducer;
