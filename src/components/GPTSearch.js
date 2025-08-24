import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggetions from "./GPTSearchSuggetions";
import { BANNER_LOGIN } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="absolute">
        <img src={BANNER_LOGIN} />
      </div>
      <GPTSearchBar />
      <GPTSearchSuggetions />
    </div>
  );
};

export default GPTSearch;
