"use client";

import Link from 'next/link'
import { useAuth } from "@/context/AuthContext"
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function Navbar() {

    const {user} = useAuth(); 

    function logout() {
        signOut(auth);
    }

    return (
        <div>
            <nav>
            <Link href="/" scroll={false}>Home</Link>
            <Link href="/explore" scroll={false}>Explore</Link>
            <Link href="/profile" scroll={false}>Profile</Link>
             <button onClick={logout} disabled={(user==null)}>SignOut</button>
            
            </nav>
        </div>
        
    )
}