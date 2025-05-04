import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white m-0 px-4 sm:px-6 py-4 flex justify-between items-center relative">
      <div>
        <img 
          src="./public/Images/logos/logo.webp" 
          alt="Logo" 
          className="h-[45px] w-[140px] object-contain"
        />
      </div>
      
      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-500 hover:text-pink-600"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8">
        <li><a href="#" className="text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">About Us</a></li>
        <li><Link to="/BrowseCardsPage" className="text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">Browse Cards</Link></li>
        <li ><a href="#" className="text-gray-500 hover:text-pink-600  font-sans text-lg transition-colors duration-200">Plans</a></li>
        <li><a href="#" className="text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">Blog</a></li>
        <li><a href="#" className="text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">User Portal</a></li>
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <li className="border-b border-gray-100">
            <a href="#" className="block px-6 py-3 text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">About Us</a>
          </li>
          <li className="border-b border-gray-100">
            <Link to="/BrowseCardsPage" className="block px-6 py-3 text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">Browse Cards</Link>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className="block px-6 py-3 text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">Plans</a>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className="block px-6 py-3 text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">Blog</a>
          </li>
          <li>
            <a href="#" className="block px-6 py-3 text-gray-500 hover:text-pink-600 text-lg font-sans transition-colors duration-200">User Portal</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;