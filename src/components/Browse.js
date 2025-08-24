import React, { useEffect } from "react";
import Header from "./Header";
import useNowMoviePlaying from "../hooks/useNowMoviePlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {
  addNowPlayMovies,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovies,
} from "../utils/movieSlice";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    addNowPlayMovies
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/popular",
    addPopularMovie
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/upcoming",
    addUpcomingMovies
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/upcoming",
    addUpcomingMovies
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/top_rated",
    addTopRatedMovie
  );
  const gptscreen = useSelector((store) => store.gpt.gptView);
  console.log(gptscreen);

  return (
    <>
      <Header />
      {gptscreen ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
