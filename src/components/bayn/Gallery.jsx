import React from "react";

const galleryData = [
  {
    id: 1,
    src: "/ofplan/bayn_imgs/features3.png",
    alt: "Modern villa front view",
  },
  {
    id: 2,
    src: "/ofplan/bayn_imgs/features2.png",
    alt: "Backyard and pool area",
  },
];

const Gallery = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24">
           {" "}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            About Bayn
          </h2>
          <div className="h-1 mb-5 bg-[#16A2B8] m-auto rounded w-1/11 transition-all duration-500 ease-in-out group-hover:w-1/9" />
         <video
          src={"/ofplan/bayn_imgs/gallery.mp4"}
          controls
          className="w-full  object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="grid gap-6 md:grid-cols-2">
          {galleryData.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
