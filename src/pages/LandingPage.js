import React from 'react';
import Intro from '../components/Intro.js';
import Card from '../components/Card.js';
import start from '../assets/start.png';
import globe from '../assets/globe.svg';
import locator from '../assets/locator.png';

const LandingPage = () => {
  return (
    <div>
      <div>
        <Intro />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-raleway font-extrabold mt-28 xl:mt-44 mb-10 text-center">
            How this Works
          </h1>
          <div className=" flex flex-col lg:flex-row xl:flex-row mt-12 mb-32">
            <Card
              image={start}
              alt="start"
              title="1. Start"
              text="Click the starting button, to begin tracking buses"
              styles="xl:justify-start xl:pt-2"
            />
            <Card
              image={locator}
              alt="locator"
              title="2. Enter location & destination"
              text="In the respective fields, enter your current location and destination"
              styles="my-28 lg:my-0 xl:my-0 lg:mx-32 xl:mx-32"
            />
            <Card
              image={globe}
              alt="globe"
              title="1. View the location of the nearest bus"
              text="Through the map, you will see the location of the buses you want to track"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
