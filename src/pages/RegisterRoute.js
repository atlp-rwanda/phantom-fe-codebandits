import React from 'react';
import { toast } from 'react-toastify';

import Button from '../components/Button.js';
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import option from '../database/routeDB.json'

const totalRoutes = option.routes;

export const options = [{
        destination1: 'Remera',
        destination2: 'Nyanza',
        id: 1
    },
    {
        destination1: 'Kabuga',
        destination2: 'Nyabugogo',
        id: 2
    },
    {
        destination1: 'Kacyiru',
        destination2: 'Kabuga',
        id: 3
    },
    {
        destination1: 'DownTown',
        destination2: 'Remera',
        id: 4
    },
    {
        destination1: 'Nyabugogo',
        destination2: 'DownTown',
        id: 5
    },
    {
        destination1: 'Remera',
        destination2: 'Kimironko',
        id: 6
    },
    {
        destination1: 'Kimironko',
        destination2: 'Kacyiru',
        id: 7
    }
];

export const routes = [{
        route: ['Kimironko', 'Kacyiru'],
        distance: '2km'
    },
    {
        route: ['Remera', 'Kacyiru'],
        distance: '1.5km'
    },
    {
        route: ['Kabuga', 'Nyabugogo'],
        distance: '20km'
    },
    {
        route: ['Kacyiru', 'Kabuga'],
        distance: '13km'
    },
    {
        route: ['Kimironko', 'Remera'],
        distance: '0.5km'
    },
    {
        route: ['Nyabugogo', 'DownTown'],
        distance: '5km'
    },
    {
        route: ['Kabuga', 'DownTown'],
        distance: '17km'
    },
    {
        route: ['DownTown', 'Remera'],
        distance: '11km'
    },

    {
        route: ['DownTown', 'Nyabugogo'],
        distance: '3km'
    },
    {
        route: ['Nyanza', 'Kimironko'],
        distance: '10km'
    },
    {
        route: ['Nyabugogo', 'Nyanza'],
        distance: '15km'
    },
    {
        route: ['Nyanza', 'DownTown'],
        distance: '8km'
    },
    {
        route: ['DownTown', 'Kimironko'],
        distance: '7.5km'
    }
];

const RegisterRoute = ({formTitle}) => {
        const inputClassStyles = 'rounded-sm px-3 py-4 mb-5 bg-[#EFEFEF]';
        formTitle = 'Register Route';

        const [destination1, setDestination1] = useState(null);
        const [destination2, setDestination2] = useState(null);
        const [distance, setDistance] = useState(null);
        const [checkDestination, setCheckDestination] = useState(false);
        const [isPending, setIsPending] = useState(false);

        const navigate = useNavigate();

        // posting data to db

        const handleSubmit = (e) => {
            e.preventDefault();
            const total_buses = '100'

            const route = {
                destination1,
                destination2,
                distance,
                total_buses
            };
            console.log(route);

            setIsPending(true);
            //handle POST request
            fetch("http://localhost:8000/routes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(route),
            }).then((res) => {
                res.json();

                toast('Route Created successfully', { type: 'success' });
                navigate('/dashboard/management')
            })
        }

        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        const distanceValue = (destination1, destination2) => {
            if (destination1 && destination2) {
                // totalRoutes.filter((entry) => {
                //     const existRoute = entry.route.includes(destination1 && destination2);
                //     if (existRoute) {
                //         console.log("routes already Exist")

                //     }
                // })

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

        //!!!!!!!!!!!!!!!!!!!!!!!
        useEffect(() => {
            distanceValue(destination1, destination2);
        }, [destination1, destination2]);

        return (
        <div className = "px-8 py-4 justify-self-center my-auto font-raleway  font-extrabold" >
                <form onSubmit = {handleSubmit}
                className = "py-8 shadow-main px-4 flex flex-col w-full md:max-w-lg md:mx-auto" >
                <h1 className = "font-bold text-xl pb-8 text-center " > {formTitle } </h1>

                <label htmlFor = "FirstDestination" className = "font-bold mb-2" > First Destination </label>

                <select name = "FirstDestination" onChange = {(e) => {
                        setDestination1(e.target.value);
                        console.log(e.target.value)
                    }
                }
                className = {inputClassStyles }>
                <option hidden > Select Destination </option> {
                options.map((option) => {
                    return ( 
                        <option value = { option.destination1 }
                        key = { option.id}> {option.destination1} 
                        </option>
                    );
                })
            } </select>

        <select name = "secondDestination"
        onChange = {(e) => {
                setDestination2(e.target.value);
                console.log(e.target.value);
            }
        }
        className = {inputClassStyles}>
            <option hidden > Select Destination </option> {
        options.map((option) => {
            return ( 
                <option value = {option.destination2}
                key = { option.id} > {option.destination2} 
                </option>
            );
        })} 
        </select>

    <label htmlFor = "seats" className = "font-bold mb-2" >Distance </label>

    <div className = "cursor-not-allowed rounded-sm px-3 py-4 mb-5 bg-[#EFEFEF] disabled:" > {
        distance || 'Distance'} </div> 
        <div className = "self-center mt-6" >
    <Button name = "Register Route" styles = "bg-primary text-sm text-white py-2 px-3 hover:bg-hover" />
    </div> 
    </form >
     </div>
     )
    };

export default RegisterRoute;