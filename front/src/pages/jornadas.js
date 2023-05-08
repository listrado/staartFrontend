import React from "react";
import { useNavigate } from "react-router-dom";

export const Jornadas = () => {
    const navigate = useNavigate();

    async function setJourney(journey) {
        try {
            navigate('/cursos', { state: { journey } })
        } catch (error) {
            alert("error on chossing journey " + error);
        }
    };

    return(
        <div className="container text-center">
            <div>
                <h1>journey</h1>
            </div>
            <div className="center">
                <div className="box" onClick={async () => {await setJourney("programing fundamentals");} }>
                    <h2>programing fundamentals</h2>
                    <p>Programming fundamentals include syntax, control flow, variables, functions, loops, and algorithms for efficient problem-solving.</p>
                </div>
                <div className="box" onClick={async () => {await setJourney("frontend programing");} }>
                    <h2>frontend programing</h2>
                    <p>Front end is the client-facing part of a website or application, involving user interface and user experience.</p>
                </div>
                <div className="box" onClick={async () => {await setJourney("backend programing");} }>
                    <h2>backend programing</h2>
                    <p>Back end is the server-side part of a website or application, involving databases, servers, and logic processing.</p>
                </div>
            </div>
        </div>
    );
};