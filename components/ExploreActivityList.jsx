"use client";

import { useExploreActivities } from "@/hooks/useActivities";
import ExploreActivityCard from "@/components/ExploreActivityCard";

export default function ExploreActivityList() {
    const { activities, loading } = useExploreActivities();

    if (loading) return <p>Loading...</p>;


    return (
        <div>
            {activities.map((a) => (
                <ExploreActivityCard
                    key={a.id}
                    title={a.title}
                    description={a.description}
                    createdDate={a.createdDate}
                    participantCount={a.participantCount}
                    participants={a.participants}
                    location={a.location}
                />
            ))}
        </div>
    )

}