import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLocation, useParams } from 'react-router-dom';

function RouteView() {
    const location = useLocation();
    // console.log("hhh",location.state);
    const {  destination1, destination2 } = location?.state?.route;

    return ( 
    <div className = 'p-4 bg-white' >
        <h2 className='text-2xl text-center font-bold'> Route informations </h2> 
        <div className='mt-5'>
        <ul>
        <li> <b> First Destination: </b> {destination1} </li > 
        < li > <b> Second Destination: </b> {destination2} </li > 
        </ul> 
        </div> <div className = 'w-[400px] h-[300px] overflow-hidden px-4 py-4' >
        <h1> Map </h1> <hr/>
        < MapContainer center = {[51.505, -0.09]} zoom = { 13 } className = "w-full h-full" >
        < TileLayer attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        < Marker position = {  [51.505, -0.09] } >
        < Popup >A pretty CSS3 popup. <br/> Easily customizable. </Popup> 
        </Marker > </MapContainer> </div > 
        </div>
    );
}

export default RouteView;