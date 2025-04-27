import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import ContactUsModal from "./ContactUsModal";

const galleryData = [
  {
    title: "Residential",
    description:
      "Al Mamsha is the first destination in Sharjah that contains ample sidewalks and walkways, enabling you to access the entire community conveniently on foot or by bicycle. It offers a dynamic and strategic lifestyle through meticulously planned buildings and modern designs with high-quality finishes that cater to the needs of young families and children.",
    image: "/ofplan/alMamsha_imgs/a1.jpg",
    reverse: false,
  },
  {
    title: "Retail",
    description:
      "Al Mamsha offers a sprawling retail facility that is spread across the ground level, providing a wide array of retail options, a first for Sharjah. The retail brands offer a unique shopping experience suitable for all shopping enthusiasts.",
    image: "/ofplan/alMamsha_imgs/a2.jpg",
    reverse: true,
  },
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
              <p className="text-lg text-gray-600 mb-6">{item.description}</p>
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
    </section>
  );
};

export default HorizontalScrollGallery;
