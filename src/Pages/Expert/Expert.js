import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className='expert-container '>
            <img className='shadow p-2 rounded-full' src={img} alt="" />
            <h4>{name}</h4>
            <p>{expertize}</p>
        </div>
    );
};

export default Expert;