import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ContactUsModal from "./ContactUsModal";

const ProjectDescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-10 md:mb-14 group">
          <img
            src="/ofplan/alMamsha_imgs/banner.jpg"
            className="m-auto pb-10"
            alt="banner"
          />
          <h1 className="text-3xl md:text-4xl   font-bold text-gray-800 mb-4">
            About Al Mamsha Sharjah
          </h1>

          <div className="h-1 bg-[#16A2B8] mx-auto rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5"></div>
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Al Mamsha by Alef Group is a state-of-the-art development presenting
            luxurious studios, 1, 2, and 3-bedroom apartments located in the
            prestigious Sharjah, UAE. The development offers a strategic
            location just off Sheikh Mohammed Bin Zayed Road in the heart of New
            Sharjah, with easy connectivity to its surrounding road networks.
          </p>

          <p className="text-lg leading-relaxed">
            It lies in a mixed-use community that offers integrated modern
            living, retail, and leisure entertainment, along with a vibrant
            urban environment. Enjoy this new destination in the Emirates with
            walkable spaces, lively retail and entertainment districts, and
            distinguished architecture, as well as high-quality public spaces.
          </p>

          <p className="text-lg leading-relaxed">
            Al Mamsha offers a lifestyle that combines modern living, retail,
            and leisure in a vibrant urban environment. It is a car-free
            mixed-use community, which includes two dynamic zones, an active
            sports zone and a family live entertainment zone. This development
            provides a lifestyle that integrates modern living, retail, and
            leisure into a vibrant urban environment.”{" "}
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
