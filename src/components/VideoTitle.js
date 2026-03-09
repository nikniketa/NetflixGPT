import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ movie_id, title, overview }) => {
  const navigate = useNavigate();

  const handlePlayButton = () => {
    navigate("/trailer/" + movie_id);
  };
  return (
    <div className="w-screen aspect-video float-left md:absolute relative left-0 px-[10%] py-[10%] bottom-0 text-white p-5 bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold text-center md:text-left">
        {title}
      </h1>
      <p className="hidden md:block mt-5 text-xl w-2/5">{overview}</p>
      <div className="mt-5">
        <button
          className="text-2xl text-black bg-white px-10 py-2 rounded-md"
          onClick={handlePlayButton}
        >
          Play
        </button>
        <button
          className="text-2xl text-white bg-opacity-30 px-10 py-2 rounded-md bg-gray-300 ml-5"
          onClick={handlePlayButton}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
