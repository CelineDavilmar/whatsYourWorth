import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Option() {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/Login');
    };
    const navigateSignup = () => {
        navigate('/Register');
    };
    return (
        //console.log("home!")
        < div >
            <button onClick={navigateLogin}> Login </button>
            <button onClick={navigateSignup}> Sign Up </button>
        </div >
    );
}