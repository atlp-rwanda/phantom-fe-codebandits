import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { toast } from 'react-toastify';
import BusTracker from '../components/BusTracker.js';
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
    },
    {
      name: 'Nyanza',
      coordinates: { lat: -2.0007591860478864, lng: 30.09273823239436 }
    },
    {
      name: 'Remera',
      coordinates: { lat: -1.9585082793047428, lng: 30.119018946877382 }
    },
    {
      name: 'Down-Town',
      coordinates: { lat: -1.9433247022379925, lng: 30.057306224487732 }
    }
  ];

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const rMachine = useRef();
  const selectOne = useRef();
  const selectDes = useRef();
  const [position, setposition] = useState(null);

  const handleRoute = (e) => {
    e.preventDefault();
    options.filter((option) => {
      const startingPoint = option.name === e.target.origin.value;
      if (startingPoint) {
        setOrigin(option.coordinates);
      }
    });
    options.filter((option) => {
      const endingPoint = option.name === e.target.destination.value;
      if (endingPoint) {
        setDestination(option.coordinates);
      }
    });
  };

  let cursor = 0;

  const [currentTrack, setcurrentTrack] = useState(null);

  useEffect(() => {
    if (origin && destination && rMachine.current) {
      rMachine.current.setWaypoints([L.latLng(origin), L.latLng(destination)]);
      rMachine.current.on('routeselected', (e) => {
        window.clearInterval();
        const coor = e.route.coordinates;
        toast('Route selected');
        setcurrentTrack(coor[cursor]);
        setInterval(() => {
          if (cursor === coor.length - 1) {
            setTimeout(() => {
              cursor = 0;
              setcurrentTrack(coor[cursor]);
            }, 5000);
          }
          cursor++;
          setcurrentTrack(coor[cursor]);
        }, 2000);
      });
    }
  }, [origin, destination]);

  const handleChange = (e) => {
    const { value } = e.target;
    const optionNames = selectDes.current.options;
    Object.keys(optionNames).forEach((key) => {
      const option = optionNames[key];
      if (option.value === value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  };

  const handleChangeDes = (e) => {
    const { value } = e.target;
    const optionNames = selectOne.current.options;
    Object.keys(optionNames).forEach((key) => {
      const option = optionNames[key];
      if (option.value === value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        setposition(userLocation);
      });
    }
  }, []);
  return (
    <div className="flex flex-col">
      <form
        id="form"
        onSubmit={handleRoute}
        className="fixed z-20 flex flex-col justify-center"
      >
        <div className="flex flex-col bg-background p-4 rounded-xl mt-2 ml-6 md:ml-10 md:items-baseline">
          <select
            type="text"
            id="origin"
            name="origin"
            ref={selectOne}
            onChange={handleChange}
            placeholder="your current location"
            className="rounded-xl bg-background border-primary text-sm outline-none mb-2 pl-4 md:pl-8 py-1 w-4/5 w-40 md:w-56 border-2"
          >
            <option id="origin-select">Select Origin</option>
            {options.map((option) => {
              return (
                <option
                  value={option.name}
                  key={option.name}
                  className="cursor-pointer bg-transparent font-bold font-raleway disabled:text-gray-400 disabled:bg-gray-100"
                >
                  {option.name}
                </option>
              );
            })}
          </select>
          <select
            onChange={handleChangeDes}
            type="text"
            id="destination"
            name="destination"
            placeholder="your destination"
            className="rounded-xl bg-background border-primary text-sm outline-none mb-2 pl-4 md:pl-8 py-1 w-40 w-4/5 md:w-56 border-2"
            ref={selectDes}
          >
            <option value="" hidden>
              Select Destination
            </option>
            {options.map((option) => {
              return (
                <option
                  value={option.name}
                  key={option.name}
                  className="cursor-pointer bg-transparent hover:bg-primary font-raleway font-bold disabled:text-gray-400 disabled:bg-gray-100"
                >
                  {option.name}
                </option>
              );
            })}
          </select>
          <div type="submit" className="flex justify-center md:ml-16">
            <Button
              name="Track"
              styles="bg-primary text-sm text-background py-1"
            />
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center z-10">
        <MapContainer
          center={{ lat: -1.936671, lng: 30.053524 }}
          zoom={13}
          zoomControl={false}
          className="h-screen md:h-[88vh] w-[95vw]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          {origin && destination && currentTrack ? (
            <BusTracker data={currentTrack} />
          ) : (
            ''
          )}

          {origin && destination ? (
            <RoutingMachine
              ref={rMachine}
              origin={origin}
              destination={destination}
              userPosition={position}
            />
          ) : (
            ''
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default TrackingPage;
