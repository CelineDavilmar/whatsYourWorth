import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function SignUp() {
    const navigate = useNavigate();
    const navigateQuestions = () => {
        navigate('/WelcomeQuestions');
    };
    const navigateLogin = () => {
        navigate('/Login');
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
        < Section >
            <form>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label className="space">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label className="space">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label className="space">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label className="space">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button onClick={navigateQuestions} type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered sign in?
                    <button onClick={navigateLogin}> Login </button>
                </p>
            </form>
        </Section >
    );
}