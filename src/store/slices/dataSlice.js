import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dataSlice = createSlice({
  name: "Data Slice",
  initialState,
  reducers: {
    setSerchedRides:(state,action)=>{
      state.searchedRides = action.payload
    },
    setMyRides:(state,action)=>{
      state.myRides = action.payload
    },
    setRideDetails:(state,action)=>{
      state.rideDetails = action.payload;
    }
  },
});

export const { setSerchedRides,setMyRides,setRideDetails } = dataSlice.actions;

export default dataSlice.reducer;
