import React from "react";
import Hero from "../components/alZahia/Hero";
import ProjectDescription from "../components/alZahia/ProjectDescription";
import ParallaxBG from "../components/alZahia/ParallaxBG";
import HorizontalScrollGallery from "../components/alZahia/HorizontalScrollGallery";
import ContactUs from "../components/alZahia/ContactUs";
import { Footer } from "../components/alZahia/Footer";
import KeyFeatures from "../components/alZahia/KeyFeatures";
import Gallery from "../components/alZahia/Gallery";
import { Whatsapp } from "../components/alZahia/Whatsapp";
import { Helmet } from "react-helmet";
export const AlZahia = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Al Zahia-sharjah – uae sales office</title>
      </Helmet>
      <Hero />
      <Whatsapp />
      <ProjectDescription />
      <HorizontalScrollGallery />
      <ParallaxBG image={"/ofplan/alZahia_imgs/z4.jpg"} />
      <Gallery />
      <KeyFeatures /> 
      <ContactUs />
      <Footer />
    </>
  );
};
