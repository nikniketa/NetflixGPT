import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ id, image }) => {
  return (
    <Link to={`/trailer/${id}`} className="w-40 md:w-56 ml-5">
      <img alt="poster" src={IMAGE_URL + image} />
    </Link>
  );
};

export default MovieCard;
