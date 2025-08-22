import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (movies.length === 0) return null;
  return (
    <div className=" z-10 bg-black">
      <div className="-mt-60 relative">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovieList} />
        <MovieList title="Top Rated" movies={movies.topRatedMovie} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
