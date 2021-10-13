import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'


const Experts = () => {

    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <div>
            <h1 className='fw-bold text-info mt-2 mb-5'>Our Experts</h1>
            <div className='experts-container'>
                {
                    experts.map(expert => <Expert
                        expert={expert}
                    ></Expert>)
                }

            </div>

        </div>
    );
};

export default Experts;