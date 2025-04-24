import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProjectDescription = () => {
  return (
    <section className="bg-gray-100">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-10 md:mb-14 group">
        <img
          src="/banner.jpeg"
          className="m-auto pb-10"
          alt="banner"
        />
        <h1 className="text-3xl md:text-4xl   font-bold text-gray-800 mb-4">
          Arim Hayyan Townhouses & Villas by Alef Group
        </h1>

        <div className="h-1 bg-[#16A2B8] mx-auto rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5"></div>
      </div>

      <div className="space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed">
          Arim in Hayyan is a new residential complex by Alef Group, which is
          one of the largest developers in the UAE, and the leading real estate
          development company in the emirate of Sharjah. The Arim neighbourhood
          will be delivered in three different phases and will include a total
          of 727 villas, with the first phase of the Arim complex comprising 268
          villas. At the moment the Hayyan community, where the Arim project is
          located, is currently under construction and the anticipated date of
          handover is set to be in the second half of 2025.{" "}
        </p>

        <p className="text-lg leading-relaxed">
          The uniquely crafted natural community features luxury villas in
          Sharjah with 4 and 5 bedrooms, as well as 6-bedroom mansions for sale,
          and property sizes range from 3,282 to 9,404 sqft. Properties in the
          Arim complex have optional design features and finishes for both
          interior and exterior spaces. Kitchens in all homes will be furnished
          with integrated appliances, designer line faucets, an under-mount
          kitchen sink and accessories from quality international brands{" "}
        </p>
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <button className="flex gap-1 m-auto items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold md:px-5 py-2 px-2 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        <FaRegArrowAltCircleRight />
        REQUEST AVAILABLE UNITS AND PRICES
        </button>
      </div>
    </div>
    </section>
  );
};

export default ProjectDescription;
