import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_OPTION } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getBGVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      MOVIE_OPTION
    );
    const res = await data.json();
    const filterData = res.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : res.results[0];

    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getBGVideo();
  }, []);
};

export default useMovieTrailer;
