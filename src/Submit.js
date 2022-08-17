import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Submit() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };
    return (
        //console.log("home!")
        < div >
            We will follow up with you within 1-2 business days.
            <button onClick={navigateHome}> Head back </button>
        </div >
    );
}