import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, addParticipantToActivity } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext"

export default function ExploreActivityCard({
  id, title, description, createdDate, participantCount, participantsIds, location,
}) {

  const [participants, setParticipants] = useState([]);
  const { user, loading } = useAuth();

  useEffect(() => {

    async function fetchParticipants() {
      if (!participantsIds || participantsIds.length === 0) {
        setParticipants([]);
        return;
      }

      const q = query(collection(db, "users"), where("userId", "in", participantsIds));
      const snapshot = await getDocs(q);
      setParticipants(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    }
    

    fetchParticipants();


  }, [participantsIds]); 

  function handleJoin() {
    if (participants.includes(user.uid)) {
      console.log(`User ${user.uid} is already a participant of activity: ${title}`);
      return;
    }

    addParticipantToActivity(id, user.uid);


    console.log(`Joining activity: ${title}`);
  }


  return (
    <article className="activity-card">
      <header className="activity-card-header">
        <h3 className="activity-card-title">{title}</h3>
      
        
        <span className="activity-card-badge">
          👥 {participants.length}/{participantCount}
        </span>
      </header>

      <p className="activity-card-description">{description}</p>
      <p className="activity-card-participants">{participants.map((p) => p.userName).join(", ")}</p>

      <ul className="activity-card-meta">
        <li>📍 {location}</li>
        <li>🗓 {createdDate}</li>
      </ul>

      <button type="button" className="activity-card-join-button" onClick={handleJoin}>
        Join
      </button>
    </article>
  );
}