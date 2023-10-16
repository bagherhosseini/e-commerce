"use client";
import React from 'react'
import Link from 'next/link'

interface Category {
  id: number,
  name: string,
  description: string,
}

interface CategoryItems {
  item: Category[]
}



const NavItem: React.FC<CategoryItems> = ({
  item
}) => {
  return (
    <div className="bg-white fixed top-0 w-full shadow-md z-50">
      <div className="flex items-center border-b">
        <div className="logo">
          <a href="/">
            <img src="/assets/logo.png" alt="logo" width="100vh" />
          </a>
        </div>
        <nav className="links mx-6 flex items-center space-x-4 lg:space-x-6 ">
          {item.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`} // Add the appropriate link
              className="hover:text-gray-300"
            >
              {category.name}
            </Link>
          ))}
          <Link className="hover:text-gray-300" href="/about-us">
            Om oss
          </Link>
          <Link className="hover:text-gray-300" href="/cart">
            Kassa
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default NavItem;
