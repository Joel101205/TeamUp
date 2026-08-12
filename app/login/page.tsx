'use client';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, saveNewUser } from "@/lib/firebase"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function handleLogin() {
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/")

        } catch (error) {
            console.log(error);
            console.log("Error logging in.")
        }
        
        setLoading(false);

    }

    function handleSignUp() {
        router.push("/sign-up")
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

        <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "login"}
        </button>

        <button onClick={handleSignUp} disabled={loading}>
            SignUp
        </button>
    </div>)
}