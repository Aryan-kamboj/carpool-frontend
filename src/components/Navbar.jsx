import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Profile</div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center`}
        >
          <Link to="/" className="text-white p-2 mx-2">My Rides</Link>
          <Link to="/" className="text-white p-2 mx-2">Search Rides</Link>
          <Link to="/create" className="text-white p-2 mx-2">Create Ride</Link>
          <Link to="/" className="text-white p-2 mx-2">My Requests</Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};
