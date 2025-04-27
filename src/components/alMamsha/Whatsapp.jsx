import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Whatsapp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-20">
      <a
        href="https://wa.me/971528582218"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center bg-green-500 animate-bounceY text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        <span className="absolute text-[8px] top-[-1px] -right-1 bg-red-600 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full shadow">
          1
        </span>
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};
