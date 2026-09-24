"use client";

import { useState } from "react";
import { saveNewActivity } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useFriends } from "@/hooks/useFriends";


export default function CreateActivityModal({ onClose }) {
    const [title, setTitle] = useState("No Title");
    const [description, setDescription] = useState("No Description");
    const [date, setDate] = useState("No Date");
    const [participantCount, setParticipantCount] = useState("1");
    const [activityLoaction, setActivityLocation] = useState("No Location");

    const {user} = useAuth();
    //const { profile } = useUserProfile(user?.uid);
    //const { friends, loading: friendsLoading} = useFriends(profile?.friendList);

     function toggleParticipant(uid) {
    setParticipantIds((prev) =>
      prev.includes(uid) ? prev.filter((id) => id !== uid) : [...prev, uid]
    );
  }

    function handleCreate() {
      saveNewActivity(title, description, date ,participantCount, activityLoaction, user.uid);

      onClose();
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h1>Create new Activity</h1>

                <label htmlFor="title">Title: </label>
                <input id="title" type="text" onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="description">Description: </label>
                <input id="description" type="text" onChange={(e) => setDescription(e.target.value)}/>

                <label htmlFor="date">Date: </label>
                <input id="date" type="text" onChange={(e) => setDate(e.target.value)}/>

                <label htmlFor="participantCount">Participant Count: </label>
                <input id="participantCount" type="text" onChange={(e) => setParticipantCount(e.target.value)}/>

                <label htmlFor="location">Location: </label>
                <input id="location" type="text" onChange={(e) => setActivityLocation(e.target.value)}/>

                <div>
                    <button onClick={handleCreate}>Create</button>
                    <button onClick={onClose}>Cancel</button>
                </div>

                
            </div>
        </div>
    )
}