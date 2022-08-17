import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/WelcomeQuestions');
    };
    return (
        //console.log("home!")
        < div >
            CONTACT US
            <button onClick={navigateHome}> Get Started! </button>
        </div >
    );
}