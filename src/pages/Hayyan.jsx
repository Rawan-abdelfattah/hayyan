import React from "react";
import Hero from "../components/hayyan/Hero";
import ProjectDescription from "../components/hayyan/ProjectDescription";
import ParallaxBG from "../components/hayyan/ParallaxBG";
import HorizontalScrollGallery from "../components/hayyan/HorizontalScrollGallery";
import RelatedProjects from "../components/hayyan/RelatedProjects ";
import ContactUs from "../components/hayyan/ContactUs";
import { Footer } from "../components/hayyan/Footer";
import KeyFeatures from "../components/hayyan/KeyFeatures";
import Gallery from "../components/hayyan/Gallery";
import { Whatsapp } from "../components/hayyan/Whatsapp";
import { Helmet } from "react-helmet";
export const Hayyan = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Hayyan-sharjah – uae sales office</title>
      </Helmet>
      <Hero />
      <Whatsapp />
      <ProjectDescription />
      <ParallaxBG image={'/ofplan/hayyan/parallax1.jpeg'} />
      <HorizontalScrollGallery/>
      <ParallaxBG
        image="/hayyan/parallax2.jpg"
        text="LARGEST SWIMMABLE BLUE WATER LAGOON IN SHARJAH"
      />
      <KeyFeatures/>
      <ParallaxBG image={'/ofplan/hayyan/parallax3.jpg'} />
      <Gallery/>
      <ParallaxBG image={'/ofplan/hayyan/parallax4.jpg'} />

      <RelatedProjects/>
      <ContactUs/>
      <Footer/>
    </>
  );
};
