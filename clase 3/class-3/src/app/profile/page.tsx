"use client"

import Link from "next/link"

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Welcome to your profile page</p>
            <Link href="/">Go back to Home</Link>
        </div>
    )
}