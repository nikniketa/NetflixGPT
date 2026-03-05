import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggetions from "./GPTSearchSuggetions";
import { BANNER_LOGIN } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="fixed inset-0 -z-10">
        <img
          alt="Banner"
          src={BANNER_LOGIN}
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="z-[1] w-full flex flex-col ">
        <GPTSearchBar />
        <GPTSearchSuggetions />
      </div>
    </div>
  );
};

export default GPTSearch;
