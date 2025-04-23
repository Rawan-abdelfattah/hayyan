import React, { useEffect, useState } from "react";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

const imageUrls = ["/hero2.jpg", "/hero1.jpg"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

      <div className="absolute top-10 left-20 z-20">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-32 sm:w-40 object-contain"
        />
      </div>

      <div className="m-auto relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-lg  sm:text-xl md:text-2xl mb-3 font-[400]">
            Luxurious 2,3,4 & 5 BED Townhouses And Villas
          </h2>

          <div className="bg-black/60 rounded mx-auto w-full max-w-[800px]">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold px-6 py-3 text-center">
              Own Your Luxury Villa
            </h1>
          </div>

          <p className="text-lg md:text-xl font-[400] mt-6 mb-2">
            Pricing Starts at AED 1.29 Mn
          </p>
          <div className="mt-10">
            {" "}
            <p className="mb-1">
              Free Hold Ownership for all{" "}
              <span className="font-bold">nationals</span>
            </p>
            <p className="mb-1 font-bold">
              Interest Free Flexible Payment Plan
            </p>
            <p className="mb-6">Only 10 Minutes away from Dubai</p>
          </div>

          <button className="flex items-center gap-2 bg-[#16A2B8] hover:bg-cyan-600 text-white font-[400] px-6 py-2 rounded-full shadow-lg transition-all duration-200 mx-auto">
            <FaDownload />
            DOWNLOAD BROCHURE
          </button>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 z-20">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center bg-green-500 animate-bounceY text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          {/* Notification Badge */}
          <span className="absolute text-[8px] top-[-1px] -right-1 bg-red-600 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full shadow">
            1
          </span>
          <FaWhatsapp className="w-8 h-8 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
