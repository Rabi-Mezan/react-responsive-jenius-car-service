import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/232.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={img} alt="" />
            <Link to='/home'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;