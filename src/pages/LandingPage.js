import React from 'react';
import Header from '../components/Header.js';
import Intro from '../components/Intro.js';
import Card from '../components/Card.js';
import globe from '../assets/globe.svg';
import Footer from '../components/Footer.js';
// import locator from '../assets/locator.svg';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-raleway font-extrabold mt-28 xl:mt-44 mb-10 text-center">
          How this Works
        </h1>
        <div className=" flex flex-col xl:flex-row mt-12 mb-32">
          <Card
            image={globe}
            alt="globe"
            title="1. Start"
            text="Click the starting button, to begin tracking buses"
          />
          <Card
            image={globe}
            alt="globe"
            title="1. Start"
            text="Click the starting button, to begin tracking buses"
            styles="my-28 xl:my-0 xl:mx-32"
          />
          <Card
            image={globe}
            alt="globe"
            title="1. Start"
            text="Click the starting button, to begin tracking buses"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
