import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dataSlice = createSlice({
  name: "Data Slice",
  initialState,
  reducers: {},
});

export const { something } = dataSlice.actions;

export default dataSlice.reducer;
