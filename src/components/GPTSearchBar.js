import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="mt-[10%] flex justify-center z-10 w-1/2">
      <form className="bg-black p-2 grid w-full col-span-12 grid-flow-col">
        <input
          type="text"
          placeholder="What you want to see?................................"
          value=""
          className="border p-4 text-2xl col-span-10"
        />
        <button className="text-white bg-red-700 p-4 text-2xl col-span-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
