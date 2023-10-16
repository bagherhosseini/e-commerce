import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-black text-white ">
      <div className='flex items-center border-b'>
      <div className="logo">
        <a href="/">
      <img src="/assets/logo.png" alt="logo" width="100vh"/>
      </a>
      </div>
      <nav className="links mx-6 flex items-center space-x-4 lg:space-x-6 ">
        <Link className="hover:text-gray-300" href="/categories">Kategorier</Link>
        <Link className="hover:text-gray-300" href="/deals">Erbjudanden</Link>
        <Link className="hover:text-gray-300" href="/about-us">Om oss</Link>
        <Link className="hover:text-gray-300"href="/checkout">Kassa</Link>
      </nav>
      <div className="search ml-auto flex items-center">
        <input type="text" className="bg-gray-200 border border-gray-300 rounded-md" placeholder=" Sök produkter..." />
        <button type="submit">🔎</button>
      </div>
      </div>
    </div>
  );
};
