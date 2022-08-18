import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function LogIn() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/Home');
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
                <h3>Sign In</h3>
                <div margin="2rem" className="mb-3">
                    <label className="space" >Email address</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label className="space">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div>
                        <input
                            type="checkbox"
                            id="customCheck1"
                        />
                        <label htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button onClick={navigateHome} type="submit">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot password?
                </p>
            </form>
        </Section >

    );
}