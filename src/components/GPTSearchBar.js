import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LANG from "../utils/languageConstant";
import ai from "../utils/openai";
import { MOVIE_OPTION } from "../utils/constants";
import { gptMovieSearchResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const [isLoading, setIsLoading] = useState("");
  const searchLang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const searchfromTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1'",
      MOVIE_OPTION,
    );
    const json = await response.json();

    return json.results;
  };
  const handleGPTSearchClick = async () => {
    setIsLoading("Loading... Please wait");
    const content = `Act as a movie search and recommendation system.

User input: "${searchInput.current.value}"

Rules:
1. If the user input is an exact movie name, return that movie name only.
2. If the user input is a genre, mood, actor, or query, recommend 5 relevant movies.
3. Return only movie names separated by commas.
4. Do not include explanations.

Example output:
Don, Golmaal, Masti, Hera Pheri, Dhol
`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: content,
    });
    const moviesArray = response.text.split(",");

    const promiseArray =
      moviesArray &&
      moviesArray.map((movie) => {
        return searchfromTMDB(movie);
      });
    const tmdbResult = await Promise.all(promiseArray);
    dispatch(
      gptMovieSearchResult({
        moviesName: moviesArray,
        movieResult: tmdbResult,
      }),
    );
    setIsLoading("");
  };
  return (
    <div className="mt-[10%] mb-5 flex justify-center items-center z-10">
      <form
        className="bg-black p-2 grid col-span-12 grid-flow-col w-full md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={LANG[searchLang].gptSerachPlaceholder}
          ref={searchInput}
          className="border p-4 text-2xl w-full md:col-span-10"
        />
        <button
          className="text-white bg-red-700 p-4 text-2xl w-full md:col-span-2"
          onClick={handleGPTSearchClick}
        >
          {LANG[searchLang].search}
        </button>
      </form>
      {isLoading && (
        <div className="w-3/4 bg-black/90 text-white absolute top-1/2 p-5 text-xl">
          {isLoading}
        </div>
      )}
    </div>
  );
};

export default GPTSearchBar;
