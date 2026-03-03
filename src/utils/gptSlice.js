import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    gptView: false,
    gptMovies: null,
    gptMovieName: null,
  },
  reducers: {
    toggleGPTView: (state) => {
      state.gptView = !state.gptView;
    },
    gptMovieSearchResult: (state, action) => {
      const { moviesName, movieResult } = action.payload;
      state.gptMovieName = moviesName;
      state.gptMovies = movieResult;
    },
  },
});

export const { toggleGPTView, gptMovieSearchResult } = gptSlice.actions;
export default gptSlice.reducer;
