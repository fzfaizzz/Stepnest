import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddressCard({ address,handleNext }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempAddress, setTempAddress] = useState({ ...address });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempAddress({ ...address });
    setIsEditing(false);
  };

  const handleSave = () => {
    // Save logic can be added here
    setIsEditing(false);
    // You might want to send updated address back to parent component or API
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempAddress((prev) => ({
      ...prev,
      [name]: value,
    }));

    useEffect(() => {
      console.log('Manually calling handleNext after mount');
      if (handleNext) {
        handleNext(); // Call it here to see if it's functional
      }
    }, [handleNext]);
  };

  // Check if address is defined and has the required properties
  if (!address) {
    return <div>No address available.</div>;
  }

  return (
    <div className="p-4 rounded-lg shadow-lg border border-gray-200 bg-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            className="font-semibold text-lg text-gray-800 capitalize border p-1 rounded-md w-full"
            name="name"
            value={tempAddress.name || ""} // Provide default empty value
            onChange={handleChange}
          />
        ) : (
          <h3 className="font-semibold text-lg text-gray-800 capitalize">
            {tempAddress.name || ""} 
          </h3>
        )}

        {!isEditing && (
          <button
            onClick={handleEdit}
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            Edit
          </button>
        )}
      </div>

      <div className="text-gray-600">
        {isEditing ? (
          <>
            <input
              className="w-full border p-1 rounded-md mb-2"
              name="address"
              placeholder="Address"
              value={tempAddress.address || ""} // Provide default empty value
              onChange={handleChange}
            />
            <input
              className="w-full border p-1 rounded-md mb-2"
              name="locality"
              placeholder="Locality"
              value={tempAddress.locality || ""} // Provide default empty value
              onChange={handleChange}
            />
            <input
              className="w-full border p-1 rounded-md mb-2"
              name="city"
              placeholder="City"
              value={tempAddress.city || ""} // Provide default empty value
              onChange={handleChange}
            />
            <input
              className="w-full border p-1 rounded-md mb-2"
              name="state"
              placeholder="State"
              value={tempAddress.state || ""} // Provide default empty value
              onChange={handleChange}
            />
            <input
              className="w-full border p-1 rounded-md mb-2"
              name="pincode"
              placeholder="Pincode"
              value={tempAddress.pincode || ""} // Provide default empty value
              onChange={handleChange}
            />
            <input
              className="w-full border p-1 rounded-md mb-2"
              name="mobile"
              placeholder="Mobile"
              value={tempAddress.mobile || ""} // Provide default empty value
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <p>{tempAddress.address}, {tempAddress.locality}, {tempAddress.city}, {tempAddress.state} - {tempAddress.pincode}</p>
            <p>Mobile: {tempAddress.mobile}</p>
          </>
        )}
      </div>

      <div className="flex justify-between flex-wrap">
        <div className="pt-4 border-t border-gray-200">
          {isEditing ? (
            <div className="flex space-x-2 mt-5">
              <button
                onClick={handleSave}
                className="bg-blue-600 h-10 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-600 h-10 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-300 ease-in-out"
              >
                Cancel
              </button>
            </div>
          ) : (
            <Link to="/orderSummary">
            <button
              className="bg-green-600 h-10 mt-5 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out"
            >
              Deliver Here
            </button>
           </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
