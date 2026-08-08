'use client';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase"

import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleLogin() {
        return signInWithEmailAndPassword(auth, email, password);
    }

    return (<div>
        <h1>Login</h1>

        <label htmlFor="email">Email:</label>
        <input 
            id="email" 
            type="text" 
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
        />

        <div></div>

        <label htmlFor="password">Password:</label>
        <input 
            id="password" 
            type="password" 
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
        />

        <div></div>

        <button onClick={handleLogin}>login</button>
    </div>)
}