import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import ContactUsModal from "./ContactUsModal";

const imageUrls = [
  "/ofplan/alZahia_imgs/hero2.jpg",
  "/ofplan/alZahia_imgs/hero1.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen text-white overflow-hidden">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex
              ? "opacity-100 scale-110"
              : "opacity-0 scale-100"
          } transform transition-transform duration-[5000ms] ease-in-out`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 lg:left-20 lg:translate-x-0">
        <img
          src="/ofplan/alZahia_imgs/logo.png"
          alt="Logo"
          className="w-32 sm:w-40 object-contain"
        />
      </div>

      <div className="m-auto relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-lg  sm:text-xl md:text-3xl mb-10 font-[700]">
            Experience vibrant urban living
          </h2>

          <h2
            style={{ textShadow: "3px 3px 1px #000000" }}
            className="text-lg sm:text-xl md:text-6xl mb-10 font-[700]"
          >
            Uptown Al Zahia
          </h2>

          <div className="flex flex-col gap-2 mb-10">
            <p className="text-lg md:text-xl font-[700] mt-6 ">
              Flexible payment Plan
            </p>
            <p className="text-lg md:text-xl font-[700]  ">
              Freehold Ownership For All Nationals
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 bg-[#16A2B8] hover:bg-cyan-600 text-white font-[400] px-6 py-2 rounded-full shadow-lg transition-all duration-200 mx-auto"
          >
            <FaDownload />
            DOWNLOAD BROCHURE
          </button>

          <ContactUsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
