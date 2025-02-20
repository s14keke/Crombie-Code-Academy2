"use client"

import Link from "next/link"
import Image from "next/image"

export default function ProfilePage() {
    return (
        <div className="flex flex-col items-center p-4">
            <Image
                src="/Profile.jpg" 
                alt="Profile Picture" 
                width={128}
                height={128}
                className="rounded-full mb-4" 
            />
            <p className="text-xl mb-2">Juan Pepito</p>
            <p className="text-lg text-gray-600 mb-4">juan.pepito@outlook.com</p>
            <Link href="/" className="text-white-500 hover:text-gray-400">Go back to Home</Link>
        </div>
    )
}