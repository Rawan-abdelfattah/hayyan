import React from "react";
import Hero from "../components/Hero";
import ProjectDescription from "../components/ProjectDescription";
import ParallaxBG from "../components/ParallaxBG";
import HorizontalScrollGallery from "../components/HorizontalScrollGallery";
import RelatedProjects from "../components/RelatedProjects ";
import ContactUs from "../components/ContactUs";
import { Footer } from "../components/Footer";
import KeyFeatures from "../components/KeyFeatures";
import Gallery from "../components/Gallery";
export const Home = () => {
  return (
    <>
      <Hero />
      <ProjectDescription />
      <ParallaxBG image={'/parallax1.jpeg'} />
      <HorizontalScrollGallery/>
      <ParallaxBG
        image="/parallax2.jpg"
        text="LARGEST SWIMMABLE BLUE WATER LAGOON IN SHARJAH"
      />
      <KeyFeatures/>
      <ParallaxBG image={'/parallax3.jpg'} />
      <Gallery/>
      <ParallaxBG image={'/parallax4.jpg'} />

      <RelatedProjects/>
      <ContactUs/>
      <Footer/>
    </>
  );
};
