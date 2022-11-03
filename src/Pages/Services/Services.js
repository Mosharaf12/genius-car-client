import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mt-10'>
                <p className='text-2xl font-bold text-orange-500'>Service</p>
                <h2 className='text-4xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service=> <ServicesCart
                    key={service._id}
                    service={service}
                    ></ServicesCart>)
                }

            </div>
            <div className='text-center m-10'>
            <button className="btn btn-outline btn-accent">More Services</button>
            </div>
        </div>
    );
};

export default Services;