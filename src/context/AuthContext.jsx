import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";

const AuthContext = React.createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    function logIn(email, pwd){
        console.log("email", email)
        return signInWithEmailAndPassword(auth, email,pwd)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
    })
    return ()=>{
        unsubscribe();
    }
    },[])

    return(
        <AuthContext.Provider value={{user, logIn, loading}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    return useContext(AuthContext)
}