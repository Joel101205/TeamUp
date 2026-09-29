'use client';

import ExploreActivityList from "@/components/ExploreActivityList";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ExplorePage() {
    const {user, loading} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
        return;
    }, [loading, user, router]);
    
    return (
        <div className="explore-page">
            <header className="explore-page-header">
                <h1>Explore</h1>
                <p className="explore-page-subtitle">Find activities to join near you</p>
            </header>

            <ExploreActivityList />
        </div>
    );
}