'use client';

import ExploreActivityList from "@/components/ExploreActivityList";

export default function ExplorePage() {
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