import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Cart from "./Cart";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, cartAll, setCartAll }) {
  const navigate = useNavigate(); // Make sure this is inside the component

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the click event from triggering navigation
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

  const handleNavigate = () => {
    console.log(`Navigating to /product/${product.id}`); // Log to debug
    navigate(`/product/${product.id}`); // Ensure route exists
  };

  return (
    <div
      onClick={handleNavigate} // Call the navigate function here
      className="border border-gray-200 rounded-lg overflow-hidden text-center shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={product.imgSrc}
        alt={product.name}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-3">
        <h1 className="text-base font-semibold mb-1 text-gray-800">{product.name}</h1>
        <div className="flex justify-center items-center mb-1 space-x-1">
          <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
          <span className="text-sm text-green-600">
            ({getDiscount(product.price, product.originalPrice)}% off)
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">Size: {product.size}</p>
        <button
          onClick={handleAddToCart} // Add to Cart logic here
          className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-4 rounded-lg w-full transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// Function to calculate percentage discount
function getDiscount(price, originalPrice) {
  const discount = ((originalPrice - price) / originalPrice) * 100;
  return Math.round(discount);
}

function SeeMoreProducts({ cartAll, setCartAll }) {
  const [products] = useState([
    {
      id: 1,
      imgSrc: "images/prodect1.png",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2300,
      size: 8,
    },
    {
      id: 2,
      imgSrc: "images/prodect2.jpg",
      name: "Step shoes",
      price: 2200,
      originalPrice: 2500,
      size: 7,
    },
    {
      id: 3,
      imgSrc: "images/poster1 2.jpg",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2500,
      size: 8,
    },
    {
      id: 4,
      imgSrc: "images/prodect2.jpg",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2500,
      size: 7,
    },
    {
      id: 5,
      imgSrc: "images/prodect2.jpg",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2500,
      size: 6,
    },
    {
      id: 6,
      imgSrc: "images/prodect1.png",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2300,
      size: 8,
    },
    {
      id: 7,
      imgSrc: "images/prodect2.jpg",
      name: "Step shoes",
      price: 2200,
      originalPrice: 2500,
      size: 7,
    },
    {
      id: 8,
      imgSrc: "images/poster1 2.jpg",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2500,
      size: 8,
    },
    {
      id: 9,
      imgSrc: "images/prodect2.jpg",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2500,
      size: 7,
    },
    {
      id: 10,
      imgSrc: "images/prodect2.jpg",
      name: "Step shoes",
      price: 1800,
      originalPrice: 2500,
      size: 6,
    },
  ]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      {/* Toast container for notifications */}
      <ToastContainer />

      <div className="sticky top-0 z-[99]">
        <Nav />
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next", // Custom next button
          prevEl: ".custom-prev", // Custom prev button
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
      >
        <SwiperSlide>
          <img
            src="images/poster1 2.jpg"
            alt="Poster 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/shoPoster2.jpg"
            alt="Poster 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/shoPoster3.jpg"
            alt="Poster 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

        <div className="custom-prev bg-gray-800 text-white p-3 rounded-full absolute left-2 top-[50%] transform -translate-y-1/2 cursor-pointer z-10">
          &#x276E; {/* Left arrow */}
        </div>
        <div className="custom-next bg-gray-800 text-white p-3 rounded-full absolute right-2 top-[50%] transform -translate-y-1/2 cursor-pointer z-10">
          &#x276F; {/* Right arrow */}
        </div>
      </Swiper>

      {/* Product grid */}
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cartAll={cartAll} setCartAll={setCartAll} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default SeeMoreProducts;
