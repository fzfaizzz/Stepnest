import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignInButton, useUser } from '@clerk/clerk-react';
import Nav from "./Nav";
import Footer from "./Footer";

function Cart({ cartAll, setCartAll }) {
  const { isSignedIn } = useUser();

  const handleRemoveItem = (Id) => {
    const filteredItem = cartAll.filter((item) => item?.id !== Id);
    setCartAll(filteredItem);
    toast.error("Item removed from cart!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleQuantityChange = (Id, action) => {
    setCartAll((prevCart) =>
      prevCart.map((item) =>
        item.id === Id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? (item.quantity || 1) + 1
                  : Math.max((item.quantity || 1) - 1, 1),
            }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartAll.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full screen height */}
      <Nav />
      <div className="flex-grow container mx-auto p-5"> {/* Flex-grow ensures it fills available space */}
        <ToastContainer />
        <h1 className="text-2xl font-semibold mb-5">Your Cart</h1>

        {cartAll.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 space-y-4">
              {cartAll.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">Size: {item.size}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-lg font-semibold">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                      {item.originalPrice && (
                        <span className="text-sm text-green-600">
                          (
                          {Math.round(
                            ((item.originalPrice - item.price) /
                              item.originalPrice) *
                              100
                          )}
                          % off)
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
                        onClick={() => handleRemoveItem(item.id)}
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
            <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-md h-auto max-h-[400px] overflow-y-auto">
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

              {!isSignedIn ? (
                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                  <SignInButton>LOGIN</SignInButton>
                </button>
              ) : (
                <Link to="/Delivery">
                  <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                    Checkout
                  </button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <p>
            Your cart is empty.{" "}
            <Link to="/see-more" className="text-blue-500 underline">
              Continue Shopping
            </Link>
          </p>
        )}
      </div>
      <Footer /> {/* Footer stays at the bottom due to flex layout */}
    </div>
  );
}

export default Cart;
