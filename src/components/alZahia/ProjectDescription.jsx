import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ContactUsModal from "./ContactUsModal";

const ProjectDescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-10 md:mb-14 group">
          <h1 className="text-3xl md:text-4xl   font-bold text-gray-800 mb-4">
            Studios & Apartments
          </h1>

          <div className="h-1 bg-[#16A2B8] mx-auto rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5"></div>
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Uptown features two residential clusters – Zohour and Woroud.
            Designed around offering sustainably designed homes ranging from
            studios to 3 bedroom apartments. Residents can enjoy
            state-of-the-art facilities and a direct pedestrian link to City
            Centre Al Zahia.
          </p>
 
        </div>

        <div className="mt-12 md:mt-16 text-center">
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
    </section>
  );
};

export default ProjectDescription;
