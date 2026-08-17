import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore"; 
import { db } from "@/lib/firebase";



export function useActivities(uid) {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uid) return;

        const q = query(collection(db, "activities"), where("createdBy", "==", uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
                
            setActivities(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false);

            console.log("Activities of current user: ", activities.join(", "));
        });

        return unsubscribe;
    }, [uid]);

    return {activities, loading};
}