import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovieList: [],
    movieTrailer: {},
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovie: [],
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
  },
});

export const {
  addNowPlayMovies,
  addMovieTrailer,
  addPopularMovie,
  addUpcomingMovies,
  addTopRatedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
