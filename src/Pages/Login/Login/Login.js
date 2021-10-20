import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { sinInUsingGoogle } = useAuth();
    return (
        <div>
            <br />
            <br />
            <h2>Please Sin-In</h2>

            

            <p>Net to Dental Care ? <Link to="/register">Create Account or Login</Link></p>

            <div>--------or----------</div>

            
            
            
            <button onClick={ sinInUsingGoogle } className="btn btn-info">Google Sine In</button>




            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Login;