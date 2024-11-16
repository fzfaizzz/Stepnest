import React, { useState } from "react";
import AddressCard from "./AddressCard";
import Footer from "./Footer";
import Nav from "./Nav";

function AddressForm(handleNext) {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
    addressType: "home",
  });

  const [savedAddress, setSavedAddress] = useState(null); // State to store the saved address

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save the form data to savedAddress state
    setSavedAddress(formData);

    // Optionally, reset the form fields
    setFormData({
      name: "",
      mobile: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      alternatePhone: "",
      addressType: "",
    });
  };

  return (
    <div>
      <Nav/>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:p-6 place-items-center">
      {/* First Column - Displaying Address Card */}
      <div className="w-[90%] p-5 lg:h-[30.5rem] h-auto cursor-pointer lg:-mt-[130px] lg:-ml-28 bg-white border border-gray-300 rounded-lg shadow-md overflow-y-scroll ">
        {/* Pass savedAddress to AddressCard */}
        {savedAddress ? <AddressCard address={savedAddress} handleNext={handleNext} /> : <p>No address saved yet.</p>}
      </div>

      {/* Second Column - Form */}
      <div className="w-full lg:w-[43rem] lg:mr-10 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Add Address</h2>

        <form onSubmit={handleSubmit}>
          {/* Form fields as defined in your previous code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">10-digit Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Locality</label>
              <input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address (Area and Street)</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">City/District/Town</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-[80%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">--Select State--</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Landmark (Optional)</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alternate Phone (Optional)</label>
              <input
                type="text"
                name="alternatePhone"
                value={formData.alternatePhone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="addressType"
                  value="home"
                  checked={formData.addressType === "home"}
                  onChange={handleChange}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-gray-700">Home</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="addressType"
                  value="work"
                  checked={formData.addressType === "work"}
                  onChange={handleChange}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-gray-700">Work</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
 
          </div>
        </form>
        <button
        onClick={() => {
          console.log('Button clicked');
          if (typeof handleNext === 'function') {
            handleNext(); // Call the function correctly
          } else {
            console.error('handleNext is not a function');
          }
        }}
      >
        Deliver Here
      </button>
      </div>
    </div>
        <Footer/>
    </div>
  );
}

export default AddressForm;
