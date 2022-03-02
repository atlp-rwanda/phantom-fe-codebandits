import React, { useEffect, useState } from 'react';
import { List } from 'react-content-loader';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import routeDb from '../../database/routeDB.json';
import Sleep from '../../utils/Sleep.js';
import Button from '../../components/Button.js';
import { options } from '../RegisterRoute.js';
import { routes } from '../RegisterRoute.js';

function RouteEdit({formTitle}) {
  const inputClassStyles = 'rounded-sm p-2  mb-5 bg-[#EFEFEF]';
  formTitle = 'Update Route';
  const navigate = useNavigate();

  const { id } = useParams();
  const data = routeDb.routes.find((d) => d.id == id);

  const [destination1, setDestination1] = useState(null);
  const [destination2, setDestination2] = useState(null);
  const [distance, setDistance] = useState(null);
  
  
 
  // useEffect(() => {
  //   const getRoute = async () => {
  //     Sleep(2000).then(() => {
  //       const r = routesDb.routes.filter((entry) => {
  //         if (entry.id == id) return entry;
  //         return ;
  //       });
  //       console.log(r);
  //       setroute(r[0] || {});
  //     });
  //   };
  //   getRoute();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total_buses = '100'
    const route = { destination1, destination2, distance, total_buses };
    console.log(route);

    fetch("http://localhost:8000/routes/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(route)
    });
    toast('Route updated successfully', { type: 'success' });
     navigate(-1)
    
}

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const distanceValue = (destination1, destination2) => {
    if (destination1 && destination2) {
        routes.filter((entry) => {
            const selectedRoute = entry.route.includes(destination1 && destination2);
            if (selectedRoute) {
                console.log(entry)

                setDistance(entry.distance)
                return
            }
        });
    }
};

useEffect(() => {
  distanceValue(destination1, destination2);
}, [destination1, destination2]);

  return (
    <div >
    <form onSubmit = {handleSubmit}
    className = "p-8 shadow-main px-4 flex flex-col w-full md:max-w-lg md:mx-auto" >
    <h1 className = "font-bold text-xl pb-8 text-center " > {formTitle } </h1>

    <label htmlFor = "FirstDestination" className = "font-bold mb-2" > First Destination </label>

    <select name = "FirstDestination" onChange = {(e) => {
            setDestination1(e.target.value);
            // console.log(e.target.value)
        }
    }
    className = {inputClassStyles }>
    <option hidden > {data.destination1} </option> {
    options.map((option) => {
        return ( 
            <option value = { option.destination1 }
            key = { option.id}> {option.destination1} 
            </option>
        );
    })
} </select>

<label htmlFor = "busType"
className = "font-bold mb-2" > Second Destination </label> 
<select name = "secondDestination"
onChange = {(e) => {
    setDestination2(e.target.value);
    // console.log(e.target.value);
}
}
className = {inputClassStyles}>
<option hidden > {data.destination2} </option> {
options.map((option) => {
return ( 
    <option value = {option.destination2}
    key = { option.id} > {option.destination2} 
    </option>
);
})} 
</select>

<label htmlFor = "seats" className = "font-bold mb-2" >Distance </label>

<div className = "cursor-not-allowed rounded-sm p-2 mb-5 bg-[#EFEFEF] disabled:" > {
distance || `${data.distance}`}</div> 
<div className = "self-center mt-6" >
<Button name = "Update Route" styles = "bg-primary text-sm text-white py-2 px-3 hover:bg-hover" />
</div> 
</form >
</div>
  )
}

export default RouteEdit;
