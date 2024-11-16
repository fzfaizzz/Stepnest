import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai"; // React Icons

function OrderPage() {
  const allOrders = [
    {
      orderId: "ORD123456",
      date: "2024-10-05",
      items: [
        {
          name: "Product 1",
          img: "https://via.placeholder.com/150", // Placeholder image link
        },
        {
          name: "Product 2",
          img: "https://via.placeholder.com/150",
        },
      ],
      total: "$150.00",
      status: "On the Way",
    },
    {
      orderId: "ORD987654",
      date: "2024-09-20",
      items: [
        {
          name: "Product 3",
          img: "https://via.placeholder.com/150",
        },
      ],
      total: "$50.00",
      status: "Delivered",
    },
    {
      orderId: "ORD567890",
      date: "2024-08-15",
      items: [
        {
          name: "Product 4",
          img: "https://via.placeholder.com/150",
        },
      ],
      total: "$80.00",
      status: "Cancelled",
    },
    {
      orderId: "ORD456789",
      date: "2024-09-01",
      items: [
        {
          name: "Product 5",
          img: "https://via.placeholder.com/150",
        },
      ],
      total: "$200.00",
      status: "Returned",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? allOrders
      : allOrders.filter((order) => order.status === filter);

  const filters = ["All", "On the Way", "Delivered", "Cancelled", "Returned"];

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap space-x-2 sm:space-x-4 mb-8">
        {filters.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-full font-semibold transition shadow-md mb-2 ${
              filter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.length === 0 ? (
          <p className="text-gray-600">
            No orders found for the selected filter.
          </p>
        ) : (
          filteredOrders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 shadow-md rounded-xl border border-gray-200 flex flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              {/* Product Images */}
              <div className="flex-shrink-0 flex space-x-4">
                {order.items.map((item, i) => (
                  <img
                    key={i}
                    src={item.img}
                    alt={item.name}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-cover"
                  />
                ))}
              </div>

              {/* Order Details */}
              <div className="flex flex-col justify-between flex-grow">
                <div className="mb-4 sm:mb-0 sm:mt-3 sm:-ml-5">
                  <h2 className="font-bold text-lg  text-gray-800">
                    Order ID: {order.orderId}
                  </h2>
                  <p className="text-gray-500">Date: {order.date}</p>
                  <ul className="list-disc ml-6  mt-2 text-gray-600">
                    {order.items.map((item, i) => (
                      <li key={i}>{item.name}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between sm:-ml-4 sm:mt-3 items-center mt-4 ">
                  <p className="font-bold text-lg text-gray-800">
                    Total: {order.total}
                  </p>
                  <p
                    className={`font-semibold text-lg sm:mr-6  ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Cancelled"
                        ? "text-red-600"
                        : order.status === "Returned"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-between space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row">
                <button className="bg-blue-600 sm:-ml-5 h-8 sm:h-10 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md flex items-center justify-center space-x-2 hover:bg-blue-700">
                  <AiOutlineShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Track Order</span>
                </button>
                <button className="bg-gray-600 h-8 sm:h-10 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md flex items-center justify-center space-x-2 hover:bg-gray-700">
                  <AiOutlineEye className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderPage;
