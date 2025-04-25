import React, { useState } from "react";
import ContactUsModal from "./ContactUsModal";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const galleryData = [
  {
    title: "Zohour 1",
    description:
      "Zohour 1 homes will define the character of Uptown Al Zahia neighbourhood, with a refreshing and contemporary design that is also sustainable and efficient in its use of natural light. With options of 1 and 2 bedroom apartments available, this offering is ideal for young families and investors alike.",
    image: "/ofplan/alZahia_imgs/z6.jpg",
    reverse: false,
  },
  {
    title: "Zohour 2",
    description:
      "Zohour 2 is the only residential building in Uptown Al Zahia with a direct link to City Centre Al Zahia. It provides contemporary home designs that are efficient and make use of natural light, offering a mix of studios, 1 and 2 bedroom apartments that are ideal for young families and investors.",
    image: "/ofplan/alZahia_imgs/z4.jpg",
    reverse: true,
  },
];
const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="bg-gray-100">
        {" "}
        <div className=" max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24">
          <div className="group">
            {" "}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Zohour Apartments
            </h2>
            <div className="h-1 bg-[#16A2B8] m-auto rounded w-1/11 transition-all duration-500 ease-in-out group-hover:w-1/9" />
          </div>
          <div className="mb-10 md:mb-14 group">
            <h1 className="text-3xl md:text-4xl   font-bold text-gray-800 mb-4">
              Tailored For You
            </h1>

            <div className="h-1 bg-[#16A2B8] rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5"></div>
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Zohour will comprise five residential buildings and is one of two
              clusters in Uptown Al Zahia. All Zohour homes will be complemented
              with state-of-the-art facilities including a gym, swimming pool
              and barbecue areas – the perfect setup for weekends with family
              and friends.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer flex gap-1 bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold md:px-5 py-2 px-4 md:text-[16px] text-[14px] rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            <FaRegArrowAltCircleRight />
            REQUEST AVAILABLE UNITS AND PRICES
          </button>
          <div className="space-y-24">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12`}
              >
                <img
                  className="w-[550px] h-full object-cover"
                  src={item.image}
                  alt={`gallery ${index + 1}`}
                />

                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h2>
                  <div className="h-1 bg-[#16A2B8] lg:mt-5 lg:mb-10 w-1/7 mx-auto lg:mx-0 rounded" />
                  <p className="text-lg text-gray-600 mb-6">
                    {item.description}
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer md:mx-auto lg:mx-0 flex gap-1 items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold md:px-5 py-2 px-4 md:text-[16px] text-[14px] rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    <FaRegArrowAltCircleRight />
                    REQUEST AVAILABLE UNITS AND PRICES
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white py-10 px-20 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Woroud Floor Plans
            </h2>
            <div className="h-1 bg-[#16A2B8] m-auto rounded w-1/11 transition-all duration-500 ease-in-out group-hover:w-1/9" />
            <img src="/ofplan/alZahia_imgs/z8.jpg" alt="alZahia" />
          </div>
        </div>
      </div>

      <div className=" max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24">
        {" "}
        <div className="bg-white py-10 px-20 ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Woroud Floor Plans
          </h2>
          <div className="h-1 bg-[#16A2B8] m-auto rounded w-1/11 transition-all duration-500 ease-in-out group-hover:w-1/9" />
          <img src="/ofplan/alZahia_imgs/z9.jpg" alt="alZahia" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
