import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';

const createRoutingMachineLayer = ({ origin, destination }) => {

  const instance = L.Routing.control({
    waypoints: [L.latLng(origin), L.latLng(destination)],
    lineOptions: {
      styles: [{ color: '#6FA1EC', weight: 4 }]
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
