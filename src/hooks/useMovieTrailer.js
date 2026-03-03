import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTION } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.movieTrailer);
  const getBGVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      MOVIE_OPTION,
    );
    const res = await data.json();
    const filterData = res.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : res.results[0];

    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    Object.keys(trailerVideo).length === 0 && getBGVideo();
  }, []);
};

export default useMovieTrailer;
