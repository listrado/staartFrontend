import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Home = () => {
    const { authJourney } = useAuth();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const { state } = useLocation();
    let courses = [];

    async function setCourse() {
        try {
            navigate('/signup')
        } catch (error) {
            alert("error on loading page " + error);
        }
    };

    return(
        <div className="container text-center">
            <div>
                <h1>this is the main page please sign up to start studing</h1>
            </div>
            <div className="column">
                <button className="box-small" onClick={async () => {await setCourse();} }>
                    <h3>signup</h3>
                </button>
            </div>
        </div>
    );
};