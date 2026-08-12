"use client";

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from '@/lib/firebase'

const AuthContext = createContext({ 
        user: null, 
        loading: true
    });

export function AuthProvider( {children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}