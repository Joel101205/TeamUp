'use client';
import { auth, signUpNewUser } from "@/lib/firebase"

import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("")


    async function handleSignUp() {
        return signUpNewUser(userName, email, password);
    }

    return (
    <div>
        <h1>SignUp</h1>

        <label htmlFor="userName">User Name:</label>
        <input 
            id="userName" 
            type="text" 
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
        />

        <div></div>

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

        <button onClick={handleSignUp}>signUp</button>
    </div>
    )
}