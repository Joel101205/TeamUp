'use client';
import { useAuth } from "@/context/AuthContext";
import { auth, signUpNewUser } from "@/lib/firebase"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/")
        }
    }, [user, router]);

    async function handleSignUp() {
        signUpNewUser(userName, email, password);
    }

    async function handleBack() {
        router.push("/login")
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

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleSignUp} disabled={loading}>
            {loading? "Signing Up..." : "SignUp"}
        </button>

        <button onClick={handleBack} disabled={loading}>
            Back
        </button>
    </div>
    )
}