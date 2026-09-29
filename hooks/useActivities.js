import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore"; 
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";


export function useActivities(uid) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;

    const q = query(collection(db, "activities"), where("participants", "array-contains", uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setActivities(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    return unsubscribe;
  }, [uid]);

  return { activities, loading };
}

export function useExploreActivities() {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "activities"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allActivities = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const notJoined = allActivities.filter(
        (a) => !a.participants?.includes(user.uid)
      );
      setActivities(notJoined);
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  return { activities, loading };
}