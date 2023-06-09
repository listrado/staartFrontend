import React, {useState} from "react";
import { useAuth } from "../context/authContext";

export const Signup = () => {
    const {signUp} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(element) {
        alert(element.defaultPrevented)
        element.preventDefault();
        alert(element.defaultPrevented)
        if (password.length < 6) {
            alert("6 character at least")
            return;
        };

        if (password !== confirmPassword) {
            alert("password not the same")
            return;
        };
        
        alert("handlesubmit");
        try {
            await signUp(email, password);
        } catch (error) {
            alert("error on user creation" + error);
        }

        
    };

    return(
        <div className="container">
            <h2>signup</h2>
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

                <label>Password confirmation</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(element) => setConfirmPassword(element.target.value)}
                />

                <button className="button-block" type="submit">
                    Signup
                </button>
            </form>
        </div>
    );
};