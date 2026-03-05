import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LANG from "../utils/languageConstant";
import ai from "../utils/openai";
import { MOVIE_OPTION } from "../utils/constants";
import { gptMovieSearchResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
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
    const content =
      "Act as a movie recommendation system and suggest some movie for the query :" +
      searchInput.current.value +
      ". if exact moonly give name of 5 movies, comma seperated like the example given ahead. example: Don, golmaaal, Masti, etc";
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
    </div>
  );
};

export default GPTSearchBar;
