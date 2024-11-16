import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaEnvelope, FaBell, FaCog, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Sample dashboard data
const dashboardData = {
  users: 277,
  orders: 338,
  products: 557,
  reviews: 166,
  sales: " ₹3,787,681.00",
  salesGrowth: "40.63%",
  lastMonthSales: " ₹3,578.90",
};

function Dashboard() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle item click
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  // Toggle sidebar collapse/expand
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Render dashboard metrics for the 'Dashboard' page
  const renderDashboard = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards for each metric */}
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{dashboardData.users}</p>
          {/* <p className="mt-2 text-sm">+95% Last Month</p> */}
        </div>
        <div className="bg-pink-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-3xl font-bold">{dashboardData.orders}</p>
          {/* <p className="mt-2 text-sm">+30% Last Month</p> */}
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-3xl font-bold">{dashboardData.products}</p>
          {/* <p className="mt-2 text-sm">+25% Last Month</p> */}
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Reviews</h3>
          <p className="text-3xl font-bold">{dashboardData.reviews}</p>
          {/* <p className="mt-2 text-sm">+45% Last Month</p> */}
        </div>
        <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-md col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-3xl font-bold">{dashboardData.sales}</p>
          {/* <p className="mt-2 text-sm">+{dashboardData.salesGrowth} Growth</p>
          <p className="mt-1 text-xs">${dashboardData.lastMonthSales} in last month</p> */}
        </div>
      </div>
    );
  };

  // Render content based on active item
  const renderContent = () => {
    if (activeItem === 'Dashboard') {
      return renderDashboard();
    }
    // Default content for other pages
    return <h1 className="text-3xl font-semibold">{activeItem} Content</h1>;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav
        className={`bg-white shadow-xl ${isCollapsed ? 'w-24' : 'w-64'} transition-all duration-300 ease-in-out flex flex-col`}
      >
        <button
          onClick={toggleCollapse}
          className="p-3 focus:outline-none hover:bg-gray-200 w-full text-left flex items-center"
        >
          {isCollapsed ? <FaArrowRight className="ml-6" /> : <FaArrowLeft className="ml-6" />} {/* Toggle icon */}
        </button>
        <ul className="mt-4">
          <li
            className={`px-7 py-3 flex items-center cursor-pointer transition-all duration-200 rounded-lg mb-1
              ${activeItem === 'Dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-blue-100 text-gray-800'}`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <FaTachometerAlt className={`${isCollapsed ? 'mx-auto text-xl' : 'mr-3 text-xl'}`} />
            {!isCollapsed && <span>Dashboard</span>}
          </li>

          <Link to="/adminProducts"> 
          <li
            className={`px-7 py-3 flex items-center cursor-pointer transition-all duration-200 rounded-lg mb-1
              ${activeItem === 'Products' ? 'bg-blue-600 text-white' : 'hover:bg-blue-100 text-gray-800'}`}
            onClick={() => handleItemClick('Products')}
          >
            <FaBoxOpen className={`${isCollapsed ? 'mx-auto text-xl' : 'mr-3 text-xl'}`} />
            {!isCollapsed && <span>Products</span>}
          </li>
          </Link>


          <Link to="/adminOrders"> 
          <li
            className={`px-7 py-3 flex items-center cursor-pointer transition-all duration-200 rounded-lg mb-1
              ${activeItem === 'Orders' ? 'bg-blue-600 text-white' : 'hover:bg-blue-100 text-gray-800'}`}
            onClick={() => handleItemClick('Orders')}
          >
            <FaShoppingCart className={`${isCollapsed ? 'mx-auto text-xl' : 'mr-3 text-xl'}`} />
            {!isCollapsed && <span>Orders</span>}
          </li>
          </Link>


        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 bg-white shadow-lg rounded-lg m-4 overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
}

export default Dashboard;
