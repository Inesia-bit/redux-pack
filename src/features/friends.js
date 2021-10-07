import { createSlice } from "@reduxjs/toolkit";

export const friendSlice = createSlice({
  name: "friends",
  initialState: { value: [] },
  reducers: {
    addfriend: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});
export const { addfriend } = friendSlice.actions;
export default friendSlice.reducer;
