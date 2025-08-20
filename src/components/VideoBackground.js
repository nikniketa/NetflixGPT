import React, { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);

  const trailerData = useSelector((store) => store.movies?.movieTrailer);
  if (!trailerData) return null;
  return (
    <iframe
      className="w-screen aspect-video "
      src={
        "https://www.youtube.com/embed/" +
        trailerData.key +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
