import React, { useRef } from "react";
import { useSelector } from "react-redux";
import LANG from "../utils/languageConstant";
import client from "./openai";
import ai from "./openai";

const GPTSearchBar = () => {
  const searchLang = useSelector((store) => store.config.lang);
  const searchInput = useRef(null);
  const handleGPTSearchClick = async () => {
    console.log(searchInput.current.value);
    const content =
      "find the 5 movie list with query:" +
      searchInput.current.value +
      " and show the result in string coma seperated";
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: content,
    });
    console.log(response.text);
  };
  return (
    <div className="mt-[10%] flex justify-center z-10 w-1/2">
      <form
        className="bg-black p-2 grid w-full col-span-12 grid-flow-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={LANG[searchLang].gptSerachPlaceholder}
          ref={searchInput}
          className="border p-4 text-2xl col-span-10"
        />
        <button
          className="text-white bg-red-700 p-4 text-2xl col-span-2"
          onClick={handleGPTSearchClick}
        >
          {LANG[searchLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
