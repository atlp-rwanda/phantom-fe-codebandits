import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

function RouteView() {
  const location = useLocation();
  // console.log("hhh",location.state);
  const { destination1, destination2 } = location?.state?.route;

  return (
    <div className="p-4 bg-white w-[90vh] font-raleway">
      <h2 className="text-2xl text-center font-bold"> Route informations </h2>
      <div className="mt-5">
        <ul>
          <li>
            {' '}
            <b> First Destination: </b> {destination1}{' '}
          </li>
          <li>
            {' '}
            <b> Second Destination: </b> {destination2}{' '}
          </li>
        </ul>
      </div>{' '}
      <div className=" h-[300px] overflow-hidden py-2">
        <h1 className="font-raleway font-bold"> Map </h1> <hr />
        <MapContainer
          center={{ lat: -1.936671, lng: 30.053524 }}
          zoom={13}
          zoomControl={false}
          className="h-full w-full mb-2"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.{' '}
            </Popup>
          </Marker>{' '}
        </MapContainer>{' '}
      </div>
    </div>
  );
}

export default RouteView;
