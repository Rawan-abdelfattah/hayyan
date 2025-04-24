import React from "react";

const galleryData = [
  {
    id: 1,
    src: "/ajwan/gallery1.jpg",
    alt: "Modern villa front view",
  },
  {
    id: 2,
    src: "/ajwan/gallery2.webp",
    alt: "Backyard and pool area",
  },
  {
    id: 3,
    src: "/ajwan/gallery3.webp",
    alt: "Row of modern townhouses",
  },
  {
    id: 4,
    src: "/ajwan/gallery4.jpg",
    alt: "Aerial view of residential community",
  },
  {
    id: 5,
    src: "/ajwan/gallery5.jpg",
    alt: "Aerial view of residential community",
  },
  {
    id: 6,
    src: "/ajwan/gallery6.jpg",
    alt: "Aerial view of residential community",
  },
];

const Gallery = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24">
        <div className="group">
          {" "}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Gallery{" "}
          </h2>
          <div className="h-1 bg-[#16A2B8] m-auto rounded w-1/11 transition-all duration-500 ease-in-out group-hover:w-1/9" />
        </div>

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
