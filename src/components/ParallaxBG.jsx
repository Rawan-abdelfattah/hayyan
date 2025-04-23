import React from "react";

const ParallaxBG = ({ image, text }) => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && (
        <div className="group text-white text-3xl font-bold text-center">
          {text}
          <div className="mt-4 mx-auto h-1  bg-white rounded w-1/7 transition-all duration-500 group-hover:w-1/5"></div>
        </div>
      )}
    </div>
  );
};

export default ParallaxBG;
