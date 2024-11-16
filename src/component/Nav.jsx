import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoBagCheck } from "react-icons/io5";
import { Sling as Hamburger } from "hamburger-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MdAccountCircle, MdSearch, MdClose } from "react-icons/md"; // Icons for search and close
import "./nav.css";

function Nav() {
  const [query, setQuery] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const searchHandler = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}`);
      setShowMobileSearch(false);
      setQuery(""); // Clear the search input after submission
    } else {
      alert("Please enter a search term.");
    }
  };

  const closeSearchHandler = () => {
    setShowMobileSearch(false);
    setQuery(""); // Clear the input field when closing the search
  };

  return (
    <div>
      <div className="flex h-[52px] text-lg sm:gap- flex-wrap bg-slate-200 items-center justify-between px-3 sm:px-10">
        {/* Logo */}
        <Link to="/explore">
          {" "}
          <h1 className="ml-10 sm:hidden md:inline-block text-3xl font-step">
            STEPNEST
          </h1>
        </Link>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-2 w-[80%] sm:w-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search item"
            className="w-full md:w-80 lg:w-96 font-serif rounded-lg mt-1 h-10 text-black border-none p-2"
          />
          <button
            onClick={searchHandler}
            className="search-button text-lg h-10 text-neutral-100 font-bold mt-1 px-4 rounded-lg"
          >
            Search
          </button>
        </div>

        {/* Icons and User Section */}
        <div className="flex items-center gap-5">
          {/* Search Icon for Mobile */}
          <MdSearch
            className="block mt-2 sm:hidden text-3xl cursor-pointer"
            onClick={() => setShowMobileSearch(true)}
          />

          <Link
            to="/order"
            onClick={() => setOpen(false)}
            className="menu-link"
          >
            <IoBagCheck className="text-2xl sm:text-3xl nav-icon" />
          </Link>

          <Link to="/cart" className="relative">
            <i
              className="fa fa-shopping-cart text-2xl sm:text-3xl nav-icon"
              style={{ verticalAlign: "middle" }} 
            ></i>
            
            {/* <span className="bg-yellow-300 text-sm absolute top-0 right-0 rounded-full px-1">{cartAll.lenght}</span> */}
          </Link>

          {/* Show SignIn/Account Options */}
          <div className="hidden sm:flex items-center gap-2">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="nav-link text-2xl mt-2">
                  <MdAccountCircle />
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="flex items-center gap-2 px-3 sm:hidden bg-slate-100 py-2 transition-all duration-300 ease-in-out">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search item"
            className="w-full font-serif rounded-lg h-10 text-black border-none p-2"
            autoFocus
          />
          <button
            onClick={searchHandler}
            className="search-button text-lg h-10 text-neutral-100 font-bold px-4 rounded-lg"
          >
            Search
          </button>
          <MdClose
            className="text-2xl cursor-pointer"
            onClick={closeSearchHandler}
          />
        </div>
      )}

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden text-sm inline-block absolute left-1 top-1 z-30">
        <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="menu p-5 absolute font-bold text-black top-0 left-0 w-56 rounded-md gap-1 h-[70%] z-20 bg-white shadow-lg">
          <ul className="flex flex-col opacity-90 items-start space-y-4 py-20 text-lg px-4">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="menu-link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                onClick={() => setOpen(false)}
                className="menu-link"
              >
                Order
              </Link>
            </li>
            {/* <li>
              <Link to="/favorites" onClick={() => setOpen(false)} className="menu-link">
                Favorites
              </Link>
            </li> */}
            <li>
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="menu-link"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="menu-link"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
