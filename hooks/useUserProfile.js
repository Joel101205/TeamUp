

import { useState, useEffect } from "react";
import { collection , onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function useUserProfile(uid) {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uid) return;

        const q = query(collection(db, "users"), where("userId", "==", uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {

            setProfile(snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null);
            setLoading(false);
        })

        return unsubscribe;

    }, [uid])


    return {profile, loading}
}