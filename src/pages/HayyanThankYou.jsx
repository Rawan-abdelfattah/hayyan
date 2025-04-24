import React from "react";

const HayyanThankYou = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hayyan/parallax4.jpg')" }}
        />

        <div className="absolute inset-0 bg-black opacity-50" />

        <h1 className="relative text-white text-5xl md:text-6xl font-bold z-10">
          Thank you
        </h1>
      </div>

      <div className="flex-grow bg-gray-100 flex items-center justify-center py-12">
        <p className="text-xl md:text-2xl font-semibold text-center">
          Our Team will contact you shortly
        </p>
      </div>

      <footer className="bg-[#191919] text-center py-10 text-white">
        Copyright © 2025 uae sales office
      </footer>
    </div>
  );
};

export default HayyanThankYou;
