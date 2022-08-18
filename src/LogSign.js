import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function Option() {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/Login');
    };
    const navigateSignup = () => {
        navigate('/Register');
    };
    const Section = styled.section`
    .mb-3{
        margin: 2rem;
    }
    .space{
        margin-right:1rem;
    }
    `;
    return (
        //console.log("home!")
        < Section >
            <button className="mb-3" onClick={navigateLogin}> Login </button>
            <button className="mb-3" onClick={navigateSignup}> Sign Up </button>
        </Section >
    );
}