"use client";

import { useAuth } from "@/context/AuthContext";
import { useActivities } from "@/hooks/useActivities";
import ActivityCard from "@/components/ActivityCard";

export default function ActivityList() {
  const { user, loading: authLoading } = useAuth();
  const { activities, loading: activitiesLoading } = useActivities(user?.uid);

  if (authLoading || activitiesLoading) return <p>Loading...</p>;

  return (
    <div>
        <h1>My Activities</h1>

        {activities.map((a) => (
          <ActivityCard
             key={a.id}
             title={a.title}
             description={a.description}
            createdDate={a.createdDate}
            participantCount={a.participantCount}
            participantsIds={a.participants}
            location={a.location}
          />
            ))}
    </div>
  );
}