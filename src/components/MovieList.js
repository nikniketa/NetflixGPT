import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="pl-6">
      <div className="pl-6">
        <h1 className="text-3xl text-white mb-5 font-medium">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} image={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
