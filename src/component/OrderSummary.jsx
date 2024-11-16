import React from 'react';
import AddressCard from './AddressCard';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

function OrderSummary({ cartAll = [], savedAddress, handleQuantityChange, handleRemoveItem, calculateTotalPrice }) {
  // Only display toast notification when an item is removed
  const handleRemove = (id) => {
    handleRemoveItem(id);
    toast.error("Item removed from cart!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen flex flex-col"> {/* Make the page fill the screen height */}
      <Nav />
      <div className="p-5 shadow-lg rounded-md border">
        {savedAddress ? <AddressCard address={savedAddress} /> : <p>No address saved yet.</p>}
      </div>

      <div className="container mx-auto p-5 flex-grow"> {/* flex-grow pushes the footer down */}
        <ToastContainer /> {/* Toast notifications container */}

        {cartAll.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="col-span-2 space-y-4">
              {cartAll.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg p-4 shadow-md"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  />
                  <div className="ml-0 md:ml-4 flex-1 mt-4 md:mt-0">
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">Size: {item.size}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-lg font-semibold">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                      )}
                      {item.originalPrice && (
                        <span className="text-sm text-green-600">
                          ({Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off)
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <button
                        onClick={() => handleQuantityChange(item.id, "decrease")}
                        disabled={item.quantity === 1}
                        className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 font-semibold"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, "increase")}
                        className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 font-semibold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="ml-auto text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Price Details</h2>
              <div className="space-y-2">
                {cartAll.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Price</span>
                <span>₹{calculateTotalPrice()}</span>
              </div>
              <Link to="/checkout">
                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Your cart is empty. <Link to="/see-more" className="text-blue-500 underline">Continue Shopping</Link></p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default OrderSummary;
