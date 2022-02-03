import React from "react";

const Grid = () => {
  return (
    <>
      <div className="max-w-screen-2xl font-sans h-full mx-24">
        <div className="flex flex-cols-1 "></div>
        <div className="flex flex-row justify-center items-center ml-4 mt-10">
          <div className="bg-red-900 w-full h-96 mr-10 rounded-xl"></div>
          <div className="bg-red-900 w-full h-96 mr-10 rounded-xl"></div>
          <div className="bg-red-900 w-full h-96 rounded-xl"></div>
        </div>
        <div className="flex flex-row justify-center items-center ml-4 mt-10">
          <div className="bg-red-900 w-full h-96 mr-10 rounded-xl"></div>
          <div className="bg-red-900 w-full h-96 mr-10 rounded-xl"></div>
          <div className="bg-red-900 w-full h-96 rounded-xl"></div>
        </div>
      </div>
    </>
  );
};

export default Grid;
