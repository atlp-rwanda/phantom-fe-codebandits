import React from 'react';
import Button from './Button.js';
import bus from '../assets/bus.png';

const Intro = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div>
        <h1 className="flex flex-col text-5xl font-medium mx-28 mt-24">
          <span>Track bus location,</span>
          <span>Save your time.</span>
        </h1>
        <p className="flex flex-col mx-40 mt-8">
          <span>Check the location of the buses</span>
          <span>on their respective routes</span>
        </p>
        <Button
          name="Start"
          styles="bg-blue-600 text-white rounded-3xl mt-10 ml-6 px-12 py-2 ml-48"
        />
      </div>
      <div className="w-96 ml-auto mr-48 mt-28">
        <img src={bus} alt="Bus" />
      </div>
    </div>
  );
};

export default Intro;
