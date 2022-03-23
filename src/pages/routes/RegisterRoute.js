import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import RouteComponent from './components/RouteComponent.js'

function RegisterRoute() {
    const navigate = useNavigate()
    const registerRouteToDB = async (destination1, destination2, distance) => {
        const total_buses = '100'
       if(destination1 === null || destination2 === null){
           toast('Make sure all destinations are selected', { type: 'error' });
           return
       }
       
        const route = { destination1, destination2, distance, total_buses };
        
        await axios.post("http://localhost:8000/routes", route)
        toast('Route Created successfully', { type: 'success' });
            navigate('/dashboard/management')
        
    }

    return (
         < RouteComponent formAction = {  registerRouteToDB } formTitle = 'Register Route' />
    )
}

export default RegisterRoute