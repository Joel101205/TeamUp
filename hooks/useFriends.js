"use client"

import { useState, useEffect } from "react";

export function useFriends(friendIds) {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!friendIds || friendIds.length === 0) {
      setFriends([]);
      setLoading(false);
      return;
    }

    const q = query(collection(db, "users"), where("userId", "in", friendIds));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFriends(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    return unsubscribe;

  }, [friendIds]);

  return { friends, loading };
}