// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
const NotFound = () => {
  return (
    <div>
            <div className="relative bg-gray-50">
      {/* <ToastContainer /> */}
      {/* <div
        className="flex items-center justify-center py-6"
        style={{
          background: "linear-gradient(to top right, white 30%, lightgray)",
        }}
      >
        <img
          src="/images/stepnlogo.png"
          alt="StepNest Logo"
          className="h-16 md:h-20"
        />
      </div>
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800">STEPNEST</h1>
      <h1 className="text-center text-lg md:text-2xl -mt-2 text-gray-600">STEP INTO COMFORT.</h1> */}

      <Nav />
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/explore" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Go back home
      </Link>
    </div>
    <Footer/>
    </div>
  );
};

export default NotFound;
