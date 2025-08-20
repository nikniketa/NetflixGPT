import React, { useEffect } from "react";

import { MOVIE_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../utils/movieSlice";

const useNowMoviePlaying = () => {
  const dispatch = useDispatch();
  const getNowMovieData = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTION
    );
    const res = await movies.json();
    dispatch(addNowPlayMovies(res.results));
  };
  useEffect(() => {
    getNowMovieData();
  }, []);
};

export default useNowMoviePlaying;
