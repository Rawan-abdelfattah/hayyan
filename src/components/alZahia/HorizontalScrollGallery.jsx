import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "swiper/css";
import { useState } from "react";
import ContactUsModal from "./ContactUsModal";

const galleryData = [
  {
    title: "Woroud Apartments",
    description:
      "Woroud is the first residential apartment building in Uptown Al Zahia offering a perfect balance of living options and meticulously designed amenities.",
    image: "/ofplan/alZahia_imgs/z1.jpg",
    reverse: false,
  },
  {
    title: "Woroud 1",
    description:
      "These homes will define the character of this neighbourhood, with a refreshing and contemporary design that is also sustainable and efficient in its use of natural light. With options of both studios and 1 bedroom apartments, it is ideal for young families and investors. Some of the homes also accommodate study rooms, an ideal space to concentrate or work from home.",
    image: "/ofplan/alZahia_imgs/z3.jpg",
    reverse: true,
  },
  {
    title: "Woroud 2",
    description:
      "Woroud 2 homes define the character of this neighborhood, with refreshing contemporary designs that are also sustainable and efficient in their use of natural light. With options of studios, 1, 2 and 3 bedroom apartments, these homes are ideal for investors and families alike.",
    image: "/ofplan/alZahia_imgs/z2.jpg",
    reverse: false,
  },
  {
    title: "Woroud 3",
    description:
      "Woroud 3 is comprised of studios and 1, 2 and 3 bedroom apartments. This is an ideal opportunity for investors and families to enjoy a family-friendly environment and a premier living experience.",
    image: "/ofplan/alZahia_imgs/z4.jpg",
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
