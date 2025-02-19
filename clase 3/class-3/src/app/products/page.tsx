"use client"

import Link from 'next/link';

export default function ProductsPage() {
    return (
        <div>
            <h1>Products Page</h1>
            <p>Welcome to the products page</p>
            <Link href="/">Go back to Home</Link>
        </div>
    )
}