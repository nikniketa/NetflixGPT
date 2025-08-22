import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ image }) => {
  return <img alt="poster" src={IMAGE_URL + image} className="w-56 ml-5" />;
};

export default MovieCard;
