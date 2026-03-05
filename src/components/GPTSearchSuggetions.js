import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchSuggetions = () => {
  const { gptMovieName, gptMovies } = useSelector((store) => store.gpt);
  if (!gptMovieName) return null;

  return (
    <>
      {gptMovieName.length === 0 && (
        <div className="bg-black/90 mt-5">No Movie Found</div>
      )}
      {gptMovieName.map((name, i) => (
        <div key={name} className="bg-black/90 pt-6 md:mx-5 mx-0">
          <MovieList title={name} movies={gptMovies[i]} />
        </div>
      ))}
    </>
  );
};

export default GPTSearchSuggetions;
