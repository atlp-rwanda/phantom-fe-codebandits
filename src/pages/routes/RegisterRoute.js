import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import RouteComponent from './components/RouteComponent.js'

function RegisterRoute() {
    const navigate = useNavigate()
    const registerRouteToDB = (destination1, destination2, distance) => {
        const total_buses = '100'

        const route = { destination1, destination2, distance, total_buses };

        fetch("http://localhost:8000/routes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(route),
        }).then((res) => {
            res.json();

            toast('Route Created successfully', {
                type: 'success'
            });
            navigate('/dashboard/management')
        })
    }
    return ( < RouteComponent formAction = {  registerRouteToDB } formTitle = 'Register Route' />
    )
}

export default RegisterRoute