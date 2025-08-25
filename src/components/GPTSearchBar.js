import React from "react";
import { useSelector } from "react-redux";
import LANG from "../utils/languageConstant";

const GPTSearchBar = () => {
  const searchLang = useSelector((store) => store.config.lang);
  return (
    <div className="mt-[10%] flex justify-center z-10 w-1/2">
      <form className="bg-black p-2 grid w-full col-span-12 grid-flow-col">
        <input
          type="text"
          placeholder={LANG[searchLang].gptSerachPlaceholder}
          value=""
          className="border p-4 text-2xl col-span-10"
        />
        <button className="text-white bg-red-700 p-4 text-2xl col-span-2">
          {LANG[searchLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
