import { Link } from "react-router-dom"


const About = () => {
    return (
      <div className="bg-gray-50">
        {/* Hero Section */}
        {/* <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('images/aboutposter.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 md:px-10 lg:px-20">
            <div>
              <h1 className="text-5xl font-extrabold text-white mb-4">Our Story</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                At <span className="text-indigo-400 font-serif ">STEPNEST</span>, we believe that every step should be a statement. We are a leading destination for exclusive, high-quality footwear that combines luxury with comfort.
              </p>
            </div>
          </div>
        </div> */}
        {/*backgroundImage: "url('images/aboutbg.jpg')",  */}
  
  <div className="w-full" style={{backgroundImage: "url('images/aboutbg.jpg')",  backgroundRepeat:"no-repeat", backgroundSize:"100%"}} >
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-10 lg:px-20 " >
          {/* Image Section */}
  
          {/* Mission Statement */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 font-serif leading-relaxed">
              Our mission is to redefine the footwear industry by offering shoes that are not only stylish but also crafted with the highest standards of quality. We are committed to delivering exceptional value and unparalleled customer service, ensuring that every customer walks away satisfied.
            </p>
          </div>
  
          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="inline-block bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zM6.03 11.03a.971.971 0 010-1.37l8.53-8.54a.971.971 0 011.37 0c.4.4.4 1.03 0 1.43L7.4 11.03a.971.971 0 01-1.37 0zm.78 2.69l2.22 2.22c.4.4 1.03.4 1.43 0l8.54-8.54c.4-.4.4-1.03 0-1.43l-2.22-2.22a.971.971 0 00-1.37 0L6.81 13.72c-.39.39-.39 1.02 0 1.42z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600 font-serif">
                We source the finest materials and employ skilled artisans to create shoes that last.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="inline-block bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zM6.03 11.03a.971.971 0 010-1.37l8.53-8.54a.971.971 0 011.37 0c.4.4.4 1.03 0 1.43L7.4 11.03a.971.971 0 01-1.37 0zm.78 2.69l2.22 2.22c.4.4 1.03.4 1.43 0l8.54-8.54c.4-.4.4-1.03 0-1.43l-2.22-2.22a.971.971 0 00-1.37 0L6.81 13.72c-.39.39-.39 1.02 0 1.42z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600 font-serif">
                Our designs push the boundaries of fashion while maintaining comfort and practicality.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="inline-block bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zM6.03 11.03a.971.971 0 010-1.37l8.53-8.54a.971.971 0 011.37 0c.4.4.4 1.03 0 1.43L7.4 11.03a.971.971 0 01-1.37 0zm.78 2.69l2.22 2.22c.4.4 1.03.4 1.43 0l8.54-8.54c.4-.4.4-1.03 0-1.43l-2.22-2.22a.971.971 0 00-1.37 0L6.81 13.72c-.39.39-.39 1.02 0 1.42z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact US</h3>
              <p className="text-gray-600 font-serif">
                {/* We are committed to sustainable practices, ensuring our shoes are environmentally friendly. */}
                1800-9899-888 <br /> 9833788xx
              </p>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Us on Our Journey</h2>
            <p className="text-lg text-gray-600 font-serif leading-relaxed mb-8">
              Discover our exclusive collections and find the perfect pair that resonates with your unique style.
            </p>
            <Link to="/explore">
            <button className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
              Shop Now
              </button>
            </Link>
          </div>
        </div>
    </div>
      </div>
    );
  };
  
  export default About;
  