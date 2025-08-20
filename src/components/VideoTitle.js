import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video float-left absolute left-0 px-[10%] py-[10%] bottom-0 text-white p-5 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className=" mt-5 text-xl w-2/5">{overview}</p>
      <div className="mt-5">
        <button className="text-2xl text-black bg-white px-10 py-2 rounded-md">
          Play
        </button>
        <button className="text-2xl text-white bg-opacity-30 px-10 py-2 rounded-md bg-gray-300 ml-5">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
