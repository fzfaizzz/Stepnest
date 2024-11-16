import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { SignInButton, SignUpButton, useUser, SignOutButton } from '@clerk/clerk-react';
import './mainpage.css';

function Mainpage() {
  const [isOpen, setOpen] = useState(false);
  const { isSignedIn } = useUser(); // Check if the user is signed in

  return (
    <div className='bg-black opacity-100 -z-10 h-screen w-screen'>
      <div className='main'>
        {/* Conditionally render based on user's authentication status */}
        {!isSignedIn ? (
          <>
            <SignInButton>
              <button className='btlg absolute top-7 left-7 bg-white p-2 px-9 text-xl rounded-3xl hidden md:inline-block'>LOGIN</button>
            </SignInButton>
            <SignUpButton>
              <button className='btsg absolute top-7 text-white left-32 bg-black p-2 pr-9 text-xl rounded-3xl hidden md:inline-block'>SIGN UP</button>
            </SignUpButton>
          </>
        ) : (
          <SignOutButton>
            <button className='btlg absolute top-7 left-7 bg-white p-2 px-9 text-xl rounded-3xl hidden md:inline-block'>LOG OUT</button>
          </SignOutButton>
        )}

        {/* Hamburger menu for smaller screens */}
        <div className='inline-block absolute ml-10 mt-5 z-20 xl:hidden'>
          <Hamburger color='white' toggled={isOpen} toggle={setOpen} />
        </div>

        {isOpen && (
          <div className='menu p-5 absolute font-bold top-0 left-0 w-48 gap-1 h-screen'>
            <ul className='flex flex-col opacity-90 items-start space-y-4 py-20 text-xl px-10'>
              {!isSignedIn ? (
                <>
                  <li><SignInButton>LOGIN</SignInButton></li>
                  <li><SignUpButton>SIGNUP</SignUpButton></li>
                </>
              ) : (
                <li><SignOutButton>LOG OUT</SignOutButton></li>
              )}
              <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link></li>
              
            </ul>
          </div>
        )}

        <img src="/images/stepnlogo.png" alt="logo" className='shoes h-24 ml-auto mr-auto py-2' />
        <div className='sm:flex absolute top-7 right-12 text-white text-3xl hidden md:inline-block'>
          <a href="#"><i className="fa fa-facebook-f"></i></a>
          <a href="#"><i className="fa fa-instagram mx-7"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>
        <hr className='border-gray-200 mx-3' />
        <h1 className='text-center text-6xl text-white mt-20 md:text-8xl'>STEPNEST</h1>
        <h1 className='text-center text-1xl ml-36 text-white mt-3 md:ml-72'>STEP INTO COMFORT.</h1>
        <Link to="/explore">
          <button className='btn bg-white p-2 px-10 rounded-2xl mt-5'>EXPLORE NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Mainpage;
