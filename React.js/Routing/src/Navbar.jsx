import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            MyApp
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Footer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Footer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;