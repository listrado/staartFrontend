import React, {
    createContext,
    useContext,
    useEffect,
    useState 
    } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
    } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function logOut() {
        return signOut(auth);
    }
    
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    };

    function currentJourney(journey) {
        return journey
    }

    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth,(user) =>{
            setCurrentUser(user);
        });
        return unsubscribe
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signUp: signUp,
                signIn: signIn,
                logOut: logOut,
                currentUser: currentUser,
                currentJourney: currentJourney,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};