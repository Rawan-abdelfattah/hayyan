import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ContactUsModal from "./ContactUsModal";

const imageUrls = ["/ajwan/hero.png", "/ajwan/hero.mp4"];

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
    <div className="relative h-[90vh] text-white overflow-hidden">
      {imageUrls.map((url, index) =>
        url.endsWith(".mp4") ? (
          <video
            key={index}
            className={`absolute inset-0 object-cover w-full h-full ${
              index === currentIndex
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            } transition-opacity duration-1000 transform transition-transform duration-[5000ms] ease-in-out`}
            autoPlay
            loop
            muted
          >
            <source src={url} type="video/mp4" />
          </video>
        ) : (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            } transform transition-transform duration-[5000ms] ease-in-out`}
            style={{ backgroundImage: `url(${url})` }}
          />
        )
      )}

      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 lg:left-20 lg:translate-x-0">
        <img
          src="/ajwan/logo.png"
          alt="Logo"
          className="w-32 sm:w-40 object-contain"
        />
      </div>

      <div className="m-auto relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-2xl w-full">
          <h2
            style={{ textShadow: "3px 3px 1px #000000" }}
            className="text-lg sm:text-xl md:text-4xl mb-3 font-[400]"
          >
            AJWAN – KHORFAKKAN RESIDENCES
          </h2>
          <div className="flex flex-col gap-5 mb-10">
            <p className="text-lg md:text-xl font-[700] mt-6 mb-2">
              6 Residential Buildings
            </p>
            <p className="mb-1">
              2, 3 and 4 Bedrooms Apartment & 3 and 4 Duplex Apartments
            </p>
            <p className="mb-1 ">Flexible payment Plan</p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer flex gap-1 m-auto items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold md:px-5 py-2 px-4 md:text-[16px] text-[14px] rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            <FaRegArrowAltCircleRight />
            REQUEST AVAILABLE UNITS AND PRICES
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
