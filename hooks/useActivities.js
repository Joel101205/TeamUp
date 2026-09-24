import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore"; 
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";


export function useActivities(uid) {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uid) return;

        const q = query(collection(db, "activities"), where("createdBy", "==", uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const userActivities = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            setActivities(userActivities);
            setLoading(false);

            console.log("Activities of current user:", userActivities);
        });

        return unsubscribe;
    }, [uid]);

    return {activities, loading};
}



export function useExploreActivities() {
    const { user } = useAuth();
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const q = query(collection(db, "activities"), where("createdBy", "!=", user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setActivities(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        });

        return unsubscribe;
    }, [user]);

    return { activities, loading };
}