import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    gptView: false,
  },
  reducers: {
    toggleGPTView: (state) => {
      state.gptView = !state.gptView;
    },
  },
});

export const { toggleGPTView } = gptSlice.actions;
export default gptSlice.reducer;
