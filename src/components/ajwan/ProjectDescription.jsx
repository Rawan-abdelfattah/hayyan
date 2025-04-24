import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ContactUsModal from "./ContactUsModal";

const ProjectDescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-10 md:mb-14 group">
          <h1 className="text-3xl md:text-4xl   font-bold text-gray-800 mb-4">
            A captivating haven of luxury living
          </h1>

          <div className="h-1 bg-[#16A2B8] mx-auto rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5" />
        </div>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Ajwan Residences features a unique collection of apartments with
            spectacular views of the Gulf of Oman and the mountains. Nestled on
            the East Coast in Khorfakkan, Ajwan Residences envisions a thriving
            community complete with hospitality, retail, residential and
            entertainment offerings, all designed to cater to families and
            experience seekers. The project features a diverse selection of 185
            apartments and residential units including world-class facilities
            and amenities.
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

          <div className=" md:flex ">
            <div>
              <p className="  text-gray-700 text-lg leading-relaxed">
                Ajwan offers 2, 3, and 4-bedroom units with diverse layouts and
                sizes. Additionally, there are spacious 3 and 4-bedroom
                duplexes, providing varied living options. The focus is on
                modern design and versatility to cater to individual
                preferences.
              </p>
              <div className="flex flex-col gap-5 pt-10 w-fit mt-5">
                <span className="text-white text-center bg-[#B0A462] py-2 px-6 rounded-full">
                  {" "}
                  2, 3 & 4 Bedrooms Apartment
                </span>
                <span className="text-white  text-center bg-[#B0A462] py-2 px-6 rounded-full">
                  3 & 4 Bedroom Apartments
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer flex gap-1 m-auto items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold md:px-5 py-2 px-4 md:text-[16px] text-[14px] rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                >
                  <FaRegArrowAltCircleRight />
                  REQUEST AVAILABLE UNITS AND PRICES
                </button>
              </div>
            </div>
            <img
              className="w-[600px] rounded shadow mt-5"
              src="/ofplan/ajwan_imgs/description.jpg"
              alt="ajwan"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
