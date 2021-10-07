import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: { bgcolor: "#dfa06e", textcolor: "#412722" } },
  reducers: {
    changeBackground: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeBackground } = themeSlice.actions;
export default themeSlice.reducer;
