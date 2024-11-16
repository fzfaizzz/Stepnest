import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slid.css";
import { Pagination, Navigation } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const product = [
  {
    id: 1,
    name: "Step shoes",
    price: 1800,
    oldPrice: 2300,
    size: 8,
    imgSrc: "images/prodect1.png",
  },
  {
    id: 2,
    name: "Step shoes",
    price: 2200,
    oldPrice: 2500,
    size: 7,
    imgSrc: "images/prodect2.jpg",
  },
  {
    id: 3,
    name: "Step shoes",
    price: 1800,
    oldPrice: 2500,
    size: 8,
    imgSrc: "images/poster1 2.jpg",
  },
  {
    id: 4,
    name: "Step shoes",
    price: 1800,
    oldPrice: 2500,
    size: 7,
    imgSrc: "images/prodect2.jpg",
  },
];

const ProductCard = ({ product, handleAddToCart, handleNavigate }) => (
  <div
    className="border border-gray-200 rounded-lg overflow-hidden text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y- bg-white relative group"
    onClick={() => handleNavigate(product.id)} // Trigger navigation on card click
  >
    <img
      src={product.imgSrc}
      alt={`${product.name} image`}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="p-4 relative z-10">
      <h1 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h1>
      <div className="flex justify-center items-center space-x-2 mb-3">
        <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
        <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">Size: {product.size}</p>
      <button
        className="buy text-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering product details
          handleAddToCart(product); // Pass product to add to cart
        }}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

function Hero({ cartAll, setCartAll }) {
  const navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);

  const handleAddToCart = (product) => {
    const productExists = cartAll.find((item) => item.id === product.id);

    if (productExists) {
      setCartAll(
        cartAll.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
      toast.info(`${product.name} quantity increased in cart!`, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      setCartAll([...cartAll, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="relative bg-gray-50">
      <ToastContainer />
      {/* <div
        className="flex items-center justify-center py-6"
        style={{
          background: "linear-gradient(to top right, white 30%, lightgray)",
        }}
      >
        <img
          src="images/stepnlogo.png"
          alt="StepNest Logo"
          className="h-16 md:h-20"
        />
      </div>
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800">STEPNEST</h1>
      <h1 className="text-center text-lg md:text-2xl -mt-2 text-gray-600">STEP INTO COMFORT.</h1> */}

      <Nav />

      <div className="mt-6 h-[60%] w-[90%] bg-black ml-[5%] shadow-xl rounded-lg overflow-hidden">
        <video
          loop
          muted
          autoPlay
          className="h-full w-full object-cover"
          src="images/navbg.MP4"
        />
      </div>

      <h1 className="font-serif text-center text-5xl mt-12 text-gray-800">ADD TO YOUR</h1>
      <h1 className="font-serif text-center text-4xl text-gray-700">COLLECTION</h1>

      {/* Product Grid */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {product.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            handleAddToCart={handleAddToCart}
            handleNavigate={handleNavigate} // Pass navigate function
          />
        ))}
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: ".custom-next", // Custom next button
          prevEl: ".custom-prev", // Custom prev button
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/prodect2.jpg" alt="Product 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/prodect1.png" alt="Product 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/poster1 2.jpg" alt="Product Poster" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/prodect2.jpg" alt="Product 2" />
        </SwiperSlide>

        {/* Custom navigation buttons */}
        <div className="custom-prev bg-gray-800 text-white p-3 rounded-full absolute left-2 top-[50%] transform -translate-y-1/2 cursor-pointer z-10">
          &#x276E;
        </div>
        <div className="custom-next bg-gray-800 text-white p-3 rounded-full absolute right-2 top-[50%] transform -translate-y-1/2 cursor-pointer z-10">
          &#x276F;
        </div>
      </Swiper>

      {/* See more button */}
      <div className="flex items-center justify-center mt-6">
        <Link to="/see-more">
          <button className="seemore text-lg bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900 h-12 text-white font-medium px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            See More
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Hero;
