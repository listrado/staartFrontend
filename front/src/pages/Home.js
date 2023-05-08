import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

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