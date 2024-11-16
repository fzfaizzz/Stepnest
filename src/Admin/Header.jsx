import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaBoxOpen, FaUsers, FaCog, FaShoppingCart } from 'react-icons/fa';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dropdown and mobile menu
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center text-black">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wider">
        <Link to="/dashboard" className="hover:text-gray-700 transition">
          STEPNEST Admin
        </Link>
      </div>

      {/* Navigation Links for desktop */}
      <nav className="hidden md:flex space-x-8">
        <Link to="/adminProducts" className="hover:text-gray-700 flex items-center transition">
          <FaBoxOpen className="mr-2" /> Products
        </Link>
        <Link to="/adminOrders" className="hover:text-gray-700 flex items-center transition">
          <FaShoppingCart className="mr-2" /> Orders
        </Link>
        <Link to="/adminUsers" className="hover:text-gray-700 flex items-center transition">
          <FaUsers className="mr-2" /> Users
        </Link>
        {/* <Link to="/admin/settings" className="hover:text-gray-700 flex items-center transition">
          <FaCog className="mr-2" /> Settings
        </Link> */}
      </nav>

      {/* User Profile */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          <FaUserCircle className="text-2xl" />
          <span>Admin</span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-700 z-10">
            <Link
              to="/admin/profile"
              className="block px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setDropdownOpen(false)}
            >
              My Profile
            </Link>
            <Link
              to="/admin/settings"
              className="block px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setDropdownOpen(false)}
            >
              Settings
            </Link>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition text-red-600"
              onClick={() => alert('Logging out...')}
            >
              <FaSignOutAlt className="inline mr-2" /> Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="hidden  items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-black hover:text-gray-700 transition focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/admin/products"
              className="hover:text-gray-700 flex items-center transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaBoxOpen className="mr-2" /> Products
            </Link>
            <Link
              to="/admin/orders"
              className="hover:text-gray-700 flex items-center transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaShoppingCart className="mr-2" /> Orders
            </Link>
            <Link
              to="/admin/users"
              className="hover:text-gray-700 flex items-center transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaUsers className="mr-2" /> Users
            </Link>
            <Link
              to="/admin/settings"
              className="hover:text-gray-700 flex items-center transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaCog className="mr-2" /> Settings
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
