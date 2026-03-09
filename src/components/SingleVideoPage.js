import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function SingleVideoPage() {
  const movie_id = useParams();
  const navigate = useNavigate();
  useMovieTrailer(movie_id.id);

  const trailerData = useSelector((store) => store.movies?.movieTrailer);
  if (!trailerData) return null;
  return (
    <>
      <button
        onClick={() => navigate(-2)}
        className="fixed bg-white/80 p-5 top-3 left-3"
      >
        <FaArrowLeft />
      </button>
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerData.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default SingleVideoPage;
