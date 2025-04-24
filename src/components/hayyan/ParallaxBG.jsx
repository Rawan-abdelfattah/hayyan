import React from "react";

const ParallaxBG = ({ image, text }) => {
  return (
    <div
      className="relative bg-center bg-cover md:h-screen h-[400px] flex items-center justify-center md:bg-fixed bg-scroll"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && (
        <div className="group text-white text-xl md:text-3xl font-bold text-center">
          {text}
          <div className="mt-4 mx-auto h-1 bg-white rounded w-1/7 transition-all duration-500 group-hover:w-1/5"></div>
        </div>
      )}
    </div>
  );
};

export default ParallaxBG;
