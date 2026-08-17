'use client'

import { useAuth } from "@/context/AuthContext"

export default function Page() {
    const {user, loading} = useAuth();


    if (loading) return <div>Loading...</div>;

    if (!user) return <p>not logged in</p>;

    return (
        <div>
            <h1>User Profile</h1>
            <p>UserID: {user.uid}</p>
            <p>UserName: {user.email}</p>
        </div>
        
    )
}