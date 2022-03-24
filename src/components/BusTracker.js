import L from 'leaflet';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Popup } from 'react-leaflet';
import { LeafletTrackingMarker } from 'react-leaflet-tracking-marker';
import icon from '../assets/busicon.png';

const busIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 30],
  popupAnchor: [2, -20]
});

function BusTracker({ data }) {
  const { lat, lng } = data;
  const [prevPos, setPrevPos] = useState([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos]);

  return (
    <LeafletTrackingMarker
      id="leaflet"
      icon={busIcon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={1000}
    >
      <Popup>
        Bus: Coaster, RAC508E <br /> Remaining seats: 5 <br /> Driver:
        <Link to="/public-profile"> Eric SHEMA.</Link>
      </Popup>
    </LeafletTrackingMarker>
  );
}

export default BusTracker;
