import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import ContactUsModal from "./ContactUsModal";

const keyFeatures = [
  { icon: "🏋️‍♂️", label: "Gym" },
  { icon: "👨‍👩‍👧", label: "Kids Playing Area" },
  { icon: "🏬", label: "Retail Outlets" },
  { icon: "🏊‍♂️", label: "Swimming Pool" },
  { icon: "🛍️", label: "Shopping Mall" },
  { icon: "🕌", label: "Mosque" },
  { icon: "🍽️", label: "Restaurant" },
];

const KeyFeatures = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100">
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24">
        <div className="flex flex-col lg:flex-row  p-6 gap-6">
          <div className="w-full lg:w-1/2 p-2">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <div className="border-b-4 border-black w-12 mb-6"></div>
            <ul className="space-y-4">
              {keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-lg">
                  <span className="text-2xl">{feature.icon}</span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer flex items-center gap-1 py-2 bg-[#16A2B8] hover:bg-cyan-600 text-white font-[400] md:px-5 py-2 px-4 md:text-[16px] text-[14px]  rounded-full shadow-lg transition-all duration-200 mt-10"
            >
              <FaDownload />
              DOWNLOAD BROCHURE
            </button>
          </div>

          <div className="bg-white rounded p-2 w-full">
            <img
              src="/hayyan/feature.jpeg"
              alt="Woman by pond"
              className="  object-cover h-[400px] md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
