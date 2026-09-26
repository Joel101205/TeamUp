"use client";

import { useAuth } from "@/context/AuthContext"
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ActivityCard from "@/components/ActivityCard"
import CreateActivityModal from "@/components/CreateActivityModal"
import ActivityList from "@/components/ActivityList"

export default function Page() {
    const { user, loading } = useAuth();
    const router = useRouter();

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
        return;
    }, [loading, user, router]);

    if (loading) {
        return <p className="page-loading">Loading...</p>
    }

    if (!user) return null;

    return (
        <div className="home-page">
            <header className="home-page-header">
                <h1>Home</h1>
                <button
                    className="create-activity-button"
                    onClick={() => setIsCreateActivityModalOpen(true)}
                >
                    + Create new activity
                </button>
            </header>

            <ActivityList/>

            {isCreateActivityModalOpen && (
                <CreateActivityModal onClose={() => setIsCreateActivityModalOpen(false)} />
            )}
        </div>
    )
}