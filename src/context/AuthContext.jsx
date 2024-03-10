import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";

const AuthContext = React.createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    function logIn(email, pwd){
        console.log("email", email)
        return signInWithEmailAndPassword(auth, email,pwd)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                localStorage.setItem("user", JSON.stringify(currentUser));
            } 
    })
    return ()=>{
        unsubscribe();
    }
    },[])

    return(
        <AuthContext.Provider value={{user, logIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}