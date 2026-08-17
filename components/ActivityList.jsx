"use client";

import { useAuth } from "@/context/AuthContext";
import { useActivities } from "@/hooks/useActivities";

export default function ActivityList() {
  const { user, loading: authLoading } = useAuth();
  const { activities, loading: activitiesLoading } = useActivities(user?.uid);

  if (authLoading || activitiesLoading) return <p>Loading...</p>;

  return (
    <div>
        <h1>My Activities</h1>

      {activities.map((a) => (
        <div key={a.id}>{a.title}</div>
      ))}
    </div>
  );
}