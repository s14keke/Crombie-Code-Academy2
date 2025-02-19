"use client"

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-white-800 p-4">
      <ul className="flex space-x-20">
        <li>
            <Link href="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/categories" className="text-white hover:text-gray-400">Categories</Link>
        </li>
        <li>
          <Link href="/products" className="text-white hover:text-gray-400">Products</Link>
        </li>
        <li className="ml-auto">
          <Link href="/profile" className="text-white hover:text-gray-400">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

