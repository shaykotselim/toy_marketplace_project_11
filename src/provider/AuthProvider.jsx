import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,   signInWithPopup,   signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    
    const createUserEmail = (email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (currentUser, displayName, photoUrl)=>{
        setLoading(true);
        return updateProfile(currentUser,{
            displayName:displayName,
            photoURL:photoUrl,
        })
    }
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo ={
                user, 
                loading, 
                createUserEmail,
                signIn,
                googleSignIn,
                logOut,
                profileUpdate,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
    
    );
};

export default AuthProvider;