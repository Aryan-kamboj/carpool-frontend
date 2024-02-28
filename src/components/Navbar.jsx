import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="backdrop-blur-3xl bg-white/50 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Travel Buddy</div>

        {/* Hamburger Menu Button for smaller devices */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
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

        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center`} >
          <Link to="/my-rides" className={`block lg:inline-block px-4 py-2 mx-2 rounded-lg ${location.pathname === "/my-rides" && "bg-white/50"}`}>My Rides</Link>
          <Link to="/search" className={`block lg:inline-block px-4 py-2 mx-2 rounded-lg ${location.pathname === "/search" && "bg-white/50"}`}>Search Rides</Link>
          <Link to="/my-requests" className={`block lg:inline-block px-4 py-2 mx-2 rounded-lg ${location.pathname === "/my-requests" && "bg-white/50"}`}>My Requests</Link>
        </div>
      </div>
    </nav>
  );
};

{/* <Link to="/create" className="block lg:inline-block p-2 mx-2">Create Ride</Link> */ }
{/* <Link to="/ride-history" className="block lg:inline-block p-2 mx-2">Ride History</Link> */ }
