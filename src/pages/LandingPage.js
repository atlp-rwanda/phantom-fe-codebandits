import React from 'react';
import Header from '../components/Header.js';
import Intro from '../components/Intro.js';
import Card from '../components/Card.js';
import globe from '../assets/globe.svg';
// import locator from '../assets/locator.svg';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mt-16 text-center">
          How this Works
        </h1>
        <div className=" flex my-12">
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
            styles="mx-32"
          />
          <Card
            image={globe}
            alt="globe"
            title="1. Start"
            text="Click the starting button, to begin tracking buses"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
