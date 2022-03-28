import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button, { ButtonLoading } from '../../../components/Button.js';
import options from './RouteOptions.js';
import { routesDistance } from './RoutesDistance.js';

const RouteComponent = ({ formTitle, formAction, data }) => {
  const inputClassStyles = 'rounded-sm px-3 py-4 mb-5 bg-[#EFEFEF]';

  const [destination1, setDestination1] = useState(null);
  const [destination2, setDestination2] = useState(null);
  const [distance, setDistance] = useState(null);
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    await formAction(destination1, destination2, distance);
    setloading(false);
  };

  const distanceValue = (destination1, destination2) => {
    if (destination1 && destination2) {
      if (destination1 === destination2) {
        toast("Destination one and Destination two can't match", {
          type: 'error'
        });
        return;
      }
      const selectedRoute = routesDistance.filter((entry) => {
        return (
          entry.route.includes(destination1) &&
          entry.route.includes(destination2)
        );
      });
      if (selectedRoute) {
        setDistance(selectedRoute[0].distance);
        return;
      }
    }
  };

  useEffect(() => {
    distanceValue(destination1, destination2);
  }, [destination2, destination1]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-8 shadow-main px-4 flex flex-col w-full md:max-w-lg md:mx-auto"
      >
        <h1 className="font-bold text-xl pb-8 text-center "> {formTitle} </h1>

        <label htmlFor="FirstDestination" className="font-bold mb-2">
          {' '}
          First Destination{' '}
        </label>

        <select
          name="FirstDestination"
          onChange={(e) => {
            setDestination1(e.target.value);
          }}
          className={inputClassStyles}
        >
          <option hidden> {data.destination1} </option>{' '}
          {options.map((option) => {
            return (
              <option value={option.destination1} key={option.id}>
                {' '}
                {option.destination1}{' '}
              </option>
            );
          })}{' '}
        </select>

        <label htmlFor="busType" className="font-bold mb-2">
          {' '}
          Second Destination{' '}
        </label>
        <select
          name="secondDestination"
          onChange={(e) => {
            setDestination2(e.target.value);
          }}
          className={inputClassStyles}
        >
          <option hidden> {data.destination2} </option>{' '}
          {options.map((option) => {
            return (
              <option value={option.destination2} key={option.id}>
                {' '}
                {option.destination2}{' '}
              </option>
            );
          })}
        </select>

        <label htmlFor="seats" className="font-bold mb-2">
          Distance{' '}
        </label>

        <div className="cursor-not-allowed rounded-sm p-2 mb-5 bg-[#EFEFEF] disabled:">
          {distance || `${data.distance}`}
        </div>
        <div className="self-center mt-6">
          {loading ? (
            <ButtonLoading name={'Sending'} />
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
    destination1: 'Select first destination',
    destination2: 'Select second destination',
    distance: 'Distance'
  }
};
export default RouteComponent;
