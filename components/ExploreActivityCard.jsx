import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";


export default function ExploreActivityCard({
  title, description, createdDate, participantCount, participantsIds, location,
}) {

  const [participants, setParticipants] = useState([]);

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

      <button type="button" className="activity-card-join-button">Join</button>
    </article>
  );
}