import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies.nowPlayingMovieList);

  if (moviesList.length === 0) return;

  const { original_title, overview, id } = moviesList[0];

  return (
    <div className="relative">
      <VideoBackground movie_id={id} />

      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
