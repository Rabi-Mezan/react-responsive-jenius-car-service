import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, price, description, img } = props.service;
    return (
        <div className='single-service shadow rounded-full'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>${price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className='btn-warning rounded mb-3 p-2'>Book {name}</button>
            </Link>
        </div >
    );
};

export default Service;