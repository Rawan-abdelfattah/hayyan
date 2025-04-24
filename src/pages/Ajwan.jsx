import React from "react";
import Hero from "../components/ajwan/Hero";
import ProjectDescription from "../components/ajwan/ProjectDescription";
import ParallaxBG from "../components/ajwan/ParallaxBG";
import RelatedProjects from "../components/ajwan/RelatedProjects ";
import ContactUs from "../components/ajwan/ContactUs";
import { Footer } from "../components/ajwan/Footer";
import KeyFeatures from "../components/ajwan/KeyFeatures";
import Gallery from "../components/ajwan/Gallery";
import { Whatsapp } from "../components/ajwan/Whatsapp";
import Map from "../components/ajwan/Map";
import { Helmet } from "react-helmet";
export const Ajwan = () => {
  return (
    <>
      <Helmet>
        <title>Ajwan-sharjah – uae sales office</title>
       
      </Helmet>

      <Hero />
      <Whatsapp />
      <ProjectDescription />
      <ParallaxBG image={"/ajwan/parallax1.webp"} />
      <KeyFeatures />
      <ParallaxBG image="/ajwan/parallax2.webp" />
      <Gallery />
      <Map />
      <RelatedProjects />
      <ContactUs />
      <Footer />
    </>
  );
};
