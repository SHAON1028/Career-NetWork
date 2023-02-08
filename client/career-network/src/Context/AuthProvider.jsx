import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [adminNavmenu, setAdminNavMenu] = useState(true)
    const [addValueInModal,setAddValueInModal]=useState(null)

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const githubSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        registerUser,
        logIn,
        logOut,
        setUser,
        updateUser,
        googleSignIn,
        githubSignIn,
        setAdminNavMenu,
        adminNavmenu,
        setAddValueInModal,
        addValueInModal
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;