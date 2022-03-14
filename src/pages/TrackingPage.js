import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup
} from 'react-leaflet';
import RoutingMachine from './RoutingMachine.js';
import Button from '../components/Button.js';

const TrackingPage = () => {
  const options = [
    {
      name: 'Nyabugogo',
      coordinates: { lat: -1.936671, lng: 30.053524 }
    },
    {
      name: 'Kimironko',
      coordinates: { lat: -1.9362376, lng: 30.130060100000037 }
    }
  ];

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleRoute = (e) => {
    e.preventDefault();
    options.filter((option) => {
      const startingPoint = option.name.includes(e.target.origin.value);
      if (startingPoint) {
        setOrigin(option.coordinates);
      }
    });
    options.filter((option) => {
      const endingPoint = option.name.includes(e.target.destination.value);
      if (endingPoint) {
        setDestination(option.coordinates);
      }
    });
  };

  return (
    <div className="flex flex-col py-8 mx-8 md:mx-32 lg:mx-28 xl:mx-72 mb-6">
      <form
        onSubmit={handleRoute}
        className="flex flex-col pb-6 md:mx-4 lg:mx-20 xl:mx-0 md:flex-row"
      >
        <div className="flex flex-col items-center md:items-baseline">
          <select
            type="text"
            id="origin"
            name="origin"
            placeholder="your current location"
            className="rounded-xl mb-2 pl-8 md:pr-24 py-1 w-4/5 md:w-full border-2"
          >
            <option>Select Origin</option>
            {options.map((option) => {
              return (
                <option
                  value={option.name}
                  key={option.name}
                  className="cursor-pointer"
                >
                  {option.name}
                </option>
              );
            })}
          </select>
          <select
            type="text"
            id="destination"
            name="destination"
            placeholder="your destination"
            className="rounded-xl mb-2 pl-8 md:pr-24 py-1 w-4/5 md:w-full border-2"
          >
            <option value="" hidden>
              Select Destination
            </option>
            {options.map((option) => {
              return (
                <option
                  value={option.name}
                  key={option.name}
                  className="cursor-pointer"
                >
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-center">
          <Button
            name="Track"
            styles="text-sm text-background bg-primary py-1 px-8 mt-4 md:mt-11 md:ml-24"
          />
        </div>
      </form>

      <div className="flex justify-center">
        <MapContainer
          center={{ lat: -1.936671, lng: 30.053524 }}
          zoom={14}
          className="h-96 md:h-96 w-[90vw] md:w-[70vw] lg:w-[70vw] xl:w-[60vw]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <RoutingMachine origin={origin} destination={destination} />
        </MapContainer>
      </div>
    </div>
  );
};

export default TrackingPage;
