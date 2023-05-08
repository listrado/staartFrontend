import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Cursos = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    let courses = [];

    async function setCourse(course) {
        try {
            console.log(course);
            navigate('/aulas', { state: { course } })
        } catch (error) {
            alert("error on chossing course " + error);
        }
    };

    switch (state.journey) {
        case "programing fundamentals":{
            courses.push("starting with programing")
            courses.push("basics of programing")
            courses.push("setup of your workspace")
            courses.push("using vs to code")
            courses.push("work with github")
            courses.push("final considerantions")
            break;
        }
        case "frontend programing":{
            courses.push("starting with frontend")
            courses.push("basics of html")
            courses.push("basics of css")
            courses.push("basics is react")
            courses.push("learning react to route")
            courses.push("final considerantions")
            break;
        }
        case "backend programing":{
            courses.push("starting with backend")
            courses.push("basics of what a database is")
            courses.push("setup and how to use your database")
            courses.push("using nodejs")
            courses.push("work with api")
            courses.push("final considerantions")
            break;
        }
        default:{
            break;
        }
    }

    return(
        <div className="container text-center">
            <div>
                <h1>courses</h1>
            </div>
            <div className="column">
                <div className="box-small" onClick={async () => {await setCourse(courses[0]);} }>
                    <h3>{courses[0]}</h3>
                </div>
                <div className="box-small" onClick={async () => {await setCourse(courses[1]);} }>
                    <h3>{courses[1]}</h3>
                </div>
                <div className="box-small" onClick={async () => {await setCourse(courses[2]);} }>
                    <h3>{courses[3]}</h3>
                </div>
                <div className="box-small" onClick={async () => {await setCourse(courses[3]);} }>
                    <h3>{courses[3]}</h3>
                </div>
                <div className="box-small" onClick={async () => {await setCourse(courses[4]);} }>
                    <h3>{courses[4]}</h3>
                </div>
                <div className="box-small" onClick={async () => {await setCourse(courses[5]);} }>
                    <h3>{courses[5]}</h3>
                </div>
            </div>
        </div>
    );
};