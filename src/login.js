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
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button onClick={navigateHome} type="submit" className="btn btn-primary">
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