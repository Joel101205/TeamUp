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
        <div className="auth-page">
            <form className="auth-card" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
                <h1 className="auth-title">Create an account</h1>

                <div className="auth-field">
                    <label htmlFor="userName">User Name</label>
                    <input
                        id="userName"
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

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

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="auth-submit" disabled={loading}>
                    {loading ? "Signing up..." : "Sign up"}
                </button>

                <button
                    type="button"
                    className="auth-secondary"
                    onClick={handleBack}
                    disabled={loading}
                >
                    Already have an account? Log in
                </button>
            </form>
        </div>
    )
}