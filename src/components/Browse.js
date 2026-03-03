import React from "react";
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
  const {
    nowPlayingMovieList,
    movieTrailer,
    popularMovies,
    upcomingMovies,
    topRatedMovie,
  } = useSelector((store) => store.movies);
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    addNowPlayMovies,
    nowPlayingMovieList,
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/popular",
    addPopularMovie,
    popularMovies,
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/upcoming",
    addUpcomingMovies,
    upcomingMovies,
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/upcoming",
    addUpcomingMovies,
    upcomingMovies,
  );
  useNowMoviePlaying(
    "https://api.themoviedb.org/3/movie/top_rated",
    addTopRatedMovie,
    topRatedMovie,
  );
  const gptscreen = useSelector((store) => store.gpt.gptView);

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
