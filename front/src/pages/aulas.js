import React from "react";

export const Aulas = () => {

    async function Video(aula) {
        try {
            console.log(aula);
        } catch (error) {
            alert("error on chossing course " + error);
        }
    };

    return(
        <div className="container text-center">
            <div>
                <h1>classes</h1>
            </div>
            <div className="column">
                <div className="box-small" onClick={async () => {await Video("");} }>
                    <h3>{"class 1"}</h3>
                </div>
                <div className="box-small" onClick={async () => {await Video("");} }>
                    <h3>{"class 2"}</h3>
                </div>
                <div className="box-small" onClick={async () => {await Video("");} }>
                    <h3>{"class 3"}</h3>
                </div>
                <div className="box-small" onClick={async () => {await Video("");} }>
                    <h3>{"class 4"}</h3>
                </div>
                <div className="box-small" onClick={async () => {await Video("");} }>
                    <h3>{"class 5"}</h3>
                </div>
                <div className="box-small" onClick={async () => {await Video("");} }>
                    <h3>{"class 6"}</h3>
                </div>
            </div>
        </div>
    );
};