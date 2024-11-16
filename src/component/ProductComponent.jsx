import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { ToastContainer, toast } from "react-toastify"; // Import Toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS

// Sample product data
const products = [
  {
    id: 1,
    name: "Step shoes",
    price: 1800,
    oldPrice: 2300,
    size: 8,
    imgSrc: "/images/prodect1.png",
  },
  {
    id: 2,
    name: "Step shoes",
    price: 2200,
    oldPrice: 2500,
    size: 7,
    imgSrc: "/images/prodect2.jpg",
  },
  {
    id: 3,
    name: "Step shoes",
    price: 1800,
    oldPrice: 2500,
    size: 8,
    imgSrc: "/images/poster1 2.jpg",
  },
  {
    id: 4,
    name: "Step shoes",
    price: 1800,
    oldPrice: 2500,
    size: 7,
    imgSrc: "/images/prodect2.jpg",
  },
];

// Product card component
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
          e.stopPropagation(); // Prevent triggering product details on button click
          handleAddToCart(product); // Add product to cart
        }}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

// Hero component that handles cart and navigation
function ProductComponent({ cartAll, setCartAll }) {
  const navigate = useNavigate();

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
      setCartAll([...cartAll, { ...product, quantity: 1 }]); // Ensure a unique ID is included
      toast.success(`${product.name} added to cart!`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product detail page
  };

  return (
    <div>
      <ToastContainer /> {/* Toast notifications container */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            handleAddToCart={handleAddToCart}
            handleNavigate={handleNavigate} // Pass navigate function to card
          />
        ))}
      </div>
    </div>
  );
}

export default ProductComponent;
