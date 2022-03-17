import { render } from '@testing-library/react';
import React from 'react';
import { MapContainer } from 'react-leaflet';
import BusTracker from '../BusTracker.js';

const data = [
  {
    lat: -1223,
    lng: 30.0
  },
  {
    lat: -12223,
    lng: 31.0
  }
];

describe('BusTracker Page', () => {
  it('Should start bus tracking', async () => {
    const elem = render(
      <MapContainer
        center={{ lat: -1.936671, lng: 30.053524 }}
        zoom={13}
        zoomControl={false}
        className="h-screen md:h-[88vh] w-[95vw]"
      >
        <BusTracker data={data[0]} />
      </MapContainer>
    );

    expect(elem).toMatchSnapshot();
  });
});

