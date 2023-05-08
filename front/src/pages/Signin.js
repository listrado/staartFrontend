import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setloading] = useState(false);

    async function handleSubmit(element) {

        element.preventDefault();
        
        setloading(true);

        if (password.length < 6) {
            alert("6 character at least")
            setloading(false);
            return;
        };
        
        try {
            await signIn(email, password);
            navigate("/profile");
        } catch (error) {
            alert("error on login " + error);
        }

        setloading(false);
    };

    return(
        <div className="container">
            <h2>login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(element) => setEmail(element.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(element) => setPassword(element.target.value)}
                />

                <button disabled={loading} className="button-block" type="submit">
                    login
                </button>
            </form>
        </div>
    );
};