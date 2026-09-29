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

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <h1 className="auth-title">Welcome back</h1>

                <div className="auth-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="auth-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="auth-submit" disabled={loading}>
                    {loading ? "Logging in..." : "Log in"}
                </button>

                <button
                    type="button"
                    className="auth-secondary"
                    onClick={handleSignUp}
                    disabled={loading}
                >
                    Don't have an account? Sign up
                </button>
            </form>
        </div>
    )
}