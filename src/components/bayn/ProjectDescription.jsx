import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ContactUsModal from "./ContactUsModal";

const ProjectDescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-10 md:mb-14 group"></div>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Bayn isn’t just a place—it’s a mindset. A seamless balance between
            community dynamism and beachside retreat, between movement and
            stillness. Located in Ghantoot, Bayn connects you effortlessly to
            Dubai and Abu Dhabi while offering a sanctuary where life flows at
            your own pace.
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
        </div>{" "}
        <div className="pt-15 gap-5">
          <div className="mx-auto py-5 flex items-center flex-col">
            <h1 className="text-3xl md:text-4xl   font-bold text-gray-800 mb-4">
              A Haven of Luxury
            </h1>
            <div className="h-1 bg-[#16A2B8] rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5" />
          </div>

          <div className="md:flex gap-15">
            {" "}
            <p className="  text-gray-700 text-lg leading-relaxed mt-15">
              Why choose between vibrancy and tranquility, between energy and
              ease? At Bayn, you don’t have to. Designed for those who want it
              all, this beachfront community in Ghantoot is where seamless
              accessibility meets uninterrupted sea views, where movement blends
              with mindfulness, and where connection coexists with privacy. With
              a walkable, self-contained layout, every necessity and indulgence
              is within reach—whether it’s a morning swim, an evening stroll, or
              a lively social gathering. Bayn is a community that reflects every
              side of you, offering a lifestyle where choice is celebrated, not
              compromised.
            </p>
            <img
              className="w-[550px] h-[400px] rounded shadow mt-5"
              src="/ofplan/bayn_imgs/description.jpg"
              alt="bayn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
