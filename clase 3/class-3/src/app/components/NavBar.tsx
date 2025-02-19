"use client"

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-white-800 p-4 flex items-center justify-center w-full">
      <ul className="flex space-x-20 w-2/3">
        <li>
            <Link href="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/categories" className="text-white hover:text-gray-400">Categories</Link>
        </li>
        <li>
          <Link href="/products" className="text-white hover:text-gray-400">Products</Link>
        </li>

      </ul>
      <div className=''>
        <Link href="/profile" className="text-white hover:text-gray-400">Profile</Link>
      </div>
    </nav>
  );
};

export default NavBar;

