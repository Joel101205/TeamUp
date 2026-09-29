'use client'

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const {user, loading} = useAuth();

    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
        return;
    }, [loading, user, router]);

    if (loading) return <div className="page-loading">Loading...</div>;

    if (!user) return <p className="page-loading">Not logged in</p>;

    return (
        <div className="profile-page">
            <header className="profile-page-header">
                <div className="profile-avatar">
                    {user.email?.[0]?.toUpperCase()}
                </div>
                <div>
                    <h1>{user.email}</h1>
                    <p className="profile-page-uid">ID: {user.uid}</p>
                </div>
            </header>
        </div>
    )
}