import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import bg from "../assets/bg_1.jpg"
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigator = useNavigate();
  // const authToken  = document.cookie;
  // console.log(document.cookie);
  // if(!(authToken?.length>0)){
  //   navigator("/login");
  // }
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <img className='absolute h-screen w-screen z-[-100]' src={bg}/>
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
          <Link to="/create" className="px-3 py-2 rounded-lg bg-orange text-white flex gap-1 items-center">
            <FaPlus />
            <p>Create Ride</p>
          </Link>
          <Link to="/my-rides" className={`block lg:inline-block px-4 py-2 mx-2 rounded-lg ${location.pathname === "/my-rides" && "bg-white/50"}`}>My Rides</Link>
          <Link to="/search" className={`block lg:inline-block px-4 py-2 mx-2 rounded-lg ${location.pathname === "/search" && "bg-white/50"}`}>Search Rides</Link>
          <Link to="/my-requests" className={`block lg:inline-block px-4 py-2 mx-2 rounded-lg ${location.pathname === "/my-requests" && "bg-white/50"}`}>My Requests</Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

{/* <Link to="/create" className="block lg:inline-block p-2 mx-2">Create Ride</Link> */ }
{/* <Link to="/ride-history" className="block lg:inline-block p-2 mx-2">Ride History</Link> */ }
