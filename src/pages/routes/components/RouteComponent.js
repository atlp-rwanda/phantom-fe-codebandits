import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button, { ButtonLoading } from '../../../components/Button.js';
import options from './RouteOptions.js';
import { routesDistance } from './RoutesDistance.js';

const RouteComponent = ({ formTitle, formAction, data }) => {
  const navigate = useNavigate();
  const inputClassStyles = 'rounded-sm px-3 py-4 mb-5 bg-[#EFEFEF]';
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await formAction(origin, destination, distance);
      navigate(-1);
    } catch (error) {
      if (error.response.data) {
        const errorData = error.response.data.data;
        Object.keys(errorData).forEach((key) => {
          toast(`${key}: ${errorData[key]}`, { type: 'error' });
        });
        return;
      }
      toast(error.message);
    } finally {
      setloading(false);
    }
  };

  const distanceValue = (origin, destination) => {
    if (origin && destination) {
      if (origin === destination) {
        toast("Origin and Destination  can't match", {
          type: 'error'
        });
        return;
      }

      const selectedRoute = routesDistance.filter((entry) => {
        return (
          entry.route.includes(origin) && entry.route.includes(destination)
        );
      });
      if (selectedRoute.length > 0) {
        setDistance(selectedRoute[0].distance);
      }
    }
  };

  useEffect(() => {
    distanceValue(origin, destination);
  }, [destination, origin]);

  useEffect(() => {
    if (data) {
      setOrigin(data.origin);
      setDestination(data.destination);
    }
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-8 shadow-main px-4 flex flex-col w-full md:max-w-lg md:mx-auto"
      >
        <h1 className="font-bold text-xl pb-8 text-center "> {formTitle} </h1>

        <label htmlFor="origin" className="font-bold mb-2">
          {' '}
          First Destination{' '}
        </label>

        <select
          name="origin"
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
          className={inputClassStyles}
        >
          <option hidden> {data.origin} </option>{' '}
          {options.map((option) => {
            return (
              <option value={option.origin} key={option.id}>
                {' '}
                {option.origin}{' '}
              </option>
            );
          })}{' '}
        </select>

        <label htmlFor="destination" className="font-bold mb-2">
          {' '}
          Second Destination{' '}
        </label>
        <select
          name="destination"
          onChange={(e) => {
            setDestination(e.target.value);
          }}
          className={inputClassStyles}
        >
          <option hidden> {data.destination} </option>{' '}
          {options.map((option) => {
            return (
              <option value={option.destination} key={option.id}>
                {' '}
                {option.destination}{' '}
              </option>
            );
          })}
        </select>

        <label htmlFor="distance" className="font-bold mb-2">
          Distance{' '}
        </label>

        <div className="cursor-not-allowed rounded-sm p-2 mb-5 bg-[#EFEFEF] disabled:">
          {distance || `${data.distance}`}
        </div>
        <div className="self-center mt-6">
          {loading ? (
            <ButtonLoading name="Sending" />
          ) : (
            <Button
              name={formTitle}
              styles="bg-primary text-sm text-white py-2 px-3 hover:bg-hover"
            />
          )}
        </div>
      </form>
    </div>
  );
};

RouteComponent.defaultProps = {
  data: {
    origin: 'Select first destination',
    destination: 'Select second destination',
    distance: 'Distance'
  }
};
export default RouteComponent;
