import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovieList: [],
    movieTrailer: {},
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addNowPlayMovies, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
