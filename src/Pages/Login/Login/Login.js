import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInusingGoogle } = useAuth();
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={signInusingGoogle} className="btn btn-regular btn-warning">Login Using Google</button>
        </div>
    );
};

export default Login;