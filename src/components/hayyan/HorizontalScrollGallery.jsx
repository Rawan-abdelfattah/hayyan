import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import ContactUsModal from "./ContactUsModal";

const exteriorImages = ["/ofplan/hayyan/exterior1.jpg", "/ofplan/hayyan/exterior2.jpg"];

const interiorImages = [
  "/ofplan/hayyan/internal1.jpg",
  "/ofplan/hayyan/internal2.jpg",
  "/ofplan/hayyan/internal3.jpg",
  "/ofplan/hayyan/internal4.jpg",
];

const HorizontalScrollGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100">
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24">
        {/* Exterior Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <Swiper
            modules={[A11y, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full max-w-md h-[300px] shadow-lg"
          >
            {exteriorImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`Exterior view ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Exterior</h2>
            <div className="h-1 bg-[#16A2B8] lg:mt-5 lg:mb-10 w-1/7 mx-auto lg:mx-0 rounded" />
            <p className="text-lg text-gray-600 mb-6">
              The exteriors provide residents with a modern lifestyle and
              exceptional quality of living which is connected to nature.
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

        {/* Interior Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interior</h2>
            <div className="h-1 bg-[#16A2B8] lg:mt-5 lg:mb-10 w-1/7 mx-auto lg:mx-0 rounded" />
            <p className="text-lg text-gray-600 mb-6">
              The interiors feature a refined and comfortable atmosphere using
              premium materials and natural lighting.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer md:mx-auto lg:mx-0 flex gap-1 items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold md:px-5 py-2 px-4 md:text-[16px] text-[14px] rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              <FaRegArrowAltCircleRight />
              REQUEST AVAILABLE UNITS AND PRICES
            </button>
          </div>

          <Swiper
            modules={[A11y, Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full max-w-md h-[300px] shadow-lg"
          >
            {interiorImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`Interior view ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Payment Plan Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Payment Plan
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            100% in 6 years. T&Cs Apply
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">40%</h3>
              <p className="text-gray-600">During First 3 years</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">60%</h3>
              <p className="text-gray-600">During Next 3 years</p>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer flex gap-1 m-auto items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold md:px-5 py-2 px-4 md:text-[16px] text-[14px] rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              <FaRegArrowAltCircleRight />
              REQUEST AVAILABLE UNITS AND PRICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollGallery;
