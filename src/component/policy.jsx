// PrivacyPolicy.js
import React from 'react';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('images/aboutposter.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 md:px-10 lg:px-20">
          <div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At <span className="text-indigo-400 font-serif">STEPNEST</span>, we are committed to protecting your privacy. This policy outlines how we handle your information and safeguard your data.
            </p>
          </div>
        </div>
      </div>


      <div className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white"style={{backgroundImage: "url('images/policybg.jpg')",  backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="text-lg text-gray-600 font-serif leading-relaxed">
              Welcome to our Privacy Policy page! When you use our e-commerce website, you trust us with your information. We are committed to protecting your privacy and ensuring the security of your data.
            </p>
          </div>


          {/* How We Use Your Information Section */}
 

          {/* How We Protect Your Information Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Protect Your Information</h2>
            <p className="text-lg text-gray-600 font-serif leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information. This includes using secure servers, encrypting sensitive data, and limiting access to authorized personnel only.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 font-serif leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4">
              <p className="text-lg text-gray-600 font-serif">Email: <a href="mailto:support@example.com" className="text-indigo-500 hover:underline">support@example.com</a></p>
              <p className="text-lg text-gray-600 font-serif mt-2">Address: 1234 E-Commerce St, Shopping City, SC 12345</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Stay Informed</h2>
            <p className="text-lg text-gray-600 font-serif leading-relaxed mb-8">
              Stay updated with our latest policies and offers. We value your privacy and strive to keep you informed.
            </p>
            <Link to="/explore">
              <button className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
