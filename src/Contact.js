import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/WelcomeQuestions');
    };
    return (
        < div >
            CONTACT US
            <br />
            <br />
            Information coimng soon
            <br />
            <br />
            <button onClick={navigateHome}> Main Page </button>
        </div >
    );
}