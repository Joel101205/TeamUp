"use client";

import { useExploreActivities } from "@/hooks/useActivities";
import ActivityCard from "@/components/ActivityCard";

export default function ExploreActivityList() {
    const { activities, loading } = useExploreActivities();

    if (loading) return <p>Loading...</p>;


    return (
        <div>
            {activities.map((a) => (
                <ActivityCard
                    key={a.id}
                    title={a.title}
                    description={a.description}
                    createdDate={a.createdDate}
                    participantCount={a.participantCount}
                    location={a.location}
                />
            ))}
        </div>
    )

}