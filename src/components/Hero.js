import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl font-sans h-full mx-24">
        <div>
          <h1 className="text-4xl font-sans text-black font-bold tracking-wide my-8">
            Live Spaces
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            All NFT on Cyber either belong to or minted by their space creator.
          </p>
        </div>
        <div className="mt-6 h-20 flex flex-row justify-between items-center">
          <button className="w-40 px-4 py-2 bg-black text-white mx-2 border border-gray-600 font-medium rounded-full">
            24h Trending
          </button>
          <button className="w-40 px-4 py-2  mx-2 border border-gray-600 font-medium rounded-full">
            Latest Shows
          </button>
          <button className="w-40 px-4 py-2  mx-2 border border-gray-600 font-medium rounded-full">
            Most Popular
          </button>
          <button className="w-40 px-4 py-2  mx-2 border border-gray-600 font-medium rounded-full">
            In Genesis
          </button>
          <button className="w-40 px-4 py-2  mx-2 border border-gray-600 font-medium rounded-full">
            {" "}
            In Temple
          </button>
          <button className="w-40 px-4 py-2  mx-2 border border-gray-600 font-medium rounded-full">
            {" "}
            In Void
          </button>
          <button className="w-40 px-4 py-2  mx-2 border border-gray-600 font-medium rounded-full">
            #BAYC
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
