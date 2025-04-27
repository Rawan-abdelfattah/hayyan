import React from "react";
import Hero from "../components/alMamsha/Hero";
import ProjectDescription from "../components/alMamsha/ProjectDescription";
import ParallaxBG from "../components/alMamsha/ParallaxBG";
import HorizontalScrollGallery from "../components/alMamsha/HorizontalScrollGallery";
import RelatedProjects from "../components/alMamsha/RelatedProjects ";
import ContactUs from "../components/alMamsha/ContactUs";
import { Footer } from "../components/alMamsha/Footer";
import KeyFeatures from "../components/alMamsha/KeyFeatures";
import Gallery from "../components/alMamsha/Gallery";
import { Whatsapp } from "../components/alMamsha/Whatsapp";
import { Helmet } from "react-helmet";     
import Map from "../components/alMamsha/Map";
export const AlMamsha = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Al Mamsha-sharjah – uae sales office</title>
      </Helmet>
      <Hero />
      <Whatsapp />
      <ProjectDescription />
      <ParallaxBG image={'/ofplan/alMamsha_imgs/hero1.jpg'} />
      <HorizontalScrollGallery/>
   
      <ParallaxBG image={'/ofplan/alMamsha_imgs/a4.jpg'} />
      <KeyFeatures/>
      <ParallaxBG image={'/ofplan/alMamsha_imgs/a5.jpg'} />
      <Gallery/>
      <Map/>

      <RelatedProjects/>
      <ContactUs/>
      <Footer/>
    </>
  );
};
