import React, { useEffect } from "react";
import Header from "./Header";
import useNowMoviePlaying from "../hooks/useNowMoviePlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowMoviePlaying();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
