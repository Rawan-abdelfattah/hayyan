import React from "react";
import Hero from "../components/bayn/Hero";
import ProjectDescription from "../components/bayn/ProjectDescription";
import ParallaxBG from "../components/bayn/ParallaxBG";
import RelatedProjects from "../components/bayn/RelatedProjects ";
import ContactUs from "../components/bayn/ContactUs";
import { Footer } from "../components/bayn/Footer";
import KeyFeatures from "../components/bayn/KeyFeatures";
import Gallery from "../components/bayn/Gallery";
import { Whatsapp } from "../components/bayn/Whatsapp";
import Map from "../components/bayn/Map";
import { Helmet } from "react-helmet";
export const Bayn = () => {
  return (
    <>
      <Helmet>
        <title>Bayn-sharjah – uae sales office</title>
      </Helmet>

      <Hero />
      <Whatsapp />
      <ProjectDescription />
      <ParallaxBG image={"/ofplan/bayn_imgs/parallax1.png"} />
      <KeyFeatures />
      <ParallaxBG image="/ofplan/bayn_imgs/map.png" />
      <Gallery />
      <Map />
      <RelatedProjects />
      <ContactUs />
      <Footer />
    </>
  );
};
