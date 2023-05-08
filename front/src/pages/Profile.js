import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Profile = () => {
    const navigate = useNavigate();
    const { currentUser, logOut } = useAuth();

    if (!currentUser) {
        return navigate("/signin");
    }

    async function handleLogout() {
        try {
            await logOut();
            navigate("/signin");
        } catch (error) {
            alert("error on logout " + error);
        }
    }

    async function jornada() {
        try {
            navigate("/jornadas");
        } catch (error) {
            alert("error on journey " + error);
        }
    }

    return(
        <div className="container">
            <h1>User Profile</h1>
            <div className="button-block">
                <button onClick={handleLogout} className="margin">logout</button>

                <button onClick={jornada} className="margin">journey</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{currentUser.email}</td>
                        <td> Atualizar perfil do usuario</td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    );
};