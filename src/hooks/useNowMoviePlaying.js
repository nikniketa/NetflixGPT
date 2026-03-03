import { useEffect } from "react";

import { MOVIE_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowMoviePlaying = (link, func, data) => {
  const dispatch = useDispatch();
  const getNowMovieData = async () => {
    const movies = await fetch(link, MOVIE_OPTION);
    const res = await movies.json();
    dispatch(func(res.results));
  };
  useEffect(() => {
    data.length === 0 && getNowMovieData();
  }, []);
};

export default useNowMoviePlaying;
