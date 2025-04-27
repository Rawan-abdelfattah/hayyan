import { useState } from "react";
import ContactUsModal from "./ContactUsModal";

const RelatedProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const relatedProjects = [
    {
      title: "Yasmeen Villas",
      description:
        "Al Yasmeen is a residential complex located in Al Zahia, Sharjah. Properties are ideal for people who are looking to live in a luxury building with comfortable accommodations.",
      image: "/ofplan/ajwan_imgs/project1.jpeg",
    },
    {
      title: "Sustainable City Sharjah",
      description:
        "Sharjah Sustainable City is the first sustainable master-planned community in the Emirate of Sharjah.",
      image: "/ofplan/project2.jpg",
    },
    {
      title: "Masaar Villas",
      description:
        "Masaar by Arada, offers a selection of 2 to 4-bedroom townhouses and 4 & 5-bedroom park villas in Sharjah, UAE",
      image: "/ofplan/project3.webp",
    },
  ];

  return (
    <section className="bg-gray-100">
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />{" "}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24 ">
        <div className="group">
          {" "}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-9 ">
            Related Projects
          </h2>
          <div className="h-1 bg-[#16A2B8] m-auto   rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5"></div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {project.description}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer inline-block bg-[#16A2B8] hover:bg-cyan-600 text-white text-sm font-semibold py-2 px-5 rounded-full shadow transition-all"
                >
                  &#x27A4; CHECK AVAILABILITY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
