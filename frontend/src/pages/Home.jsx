import React from "react";
import Footer from "../components/ReusableComponents/Footer/Footer";
import {
  ClientFeedback,
  HeroSection,
  TryPoshDubbing,
  ProductVideo,
  Faq,
  ProductFeatures,
  WhyPoshDubbing,
} from "../components/Home";

const Home = (props) => {
  console.log(props)
  return (
    <main>
      <HeroSection props={props}/>
      <ProductVideo />
      <TryPoshDubbing />
      <ProductFeatures />
      <WhyPoshDubbing />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
