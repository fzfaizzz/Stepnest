import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    images: [], // Changed to an array for multiple images
    highlights: "",
    details: "",
    sizes: "",
    marketPrice: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(imagePreviews).then((imageUrls) => {
      setNewProduct((prev) => ({
        ...prev,
        images: imageUrls,
      }));
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (
      newProduct.name &&
      newProduct.price &&
      newProduct.quantity &&
      newProduct.images.length >= 4 && // Ensure at least 4 images
      newProduct.highlights &&
      newProduct.details &&
      newProduct.sizes &&
      newProduct.marketPrice
    ) {
      setProducts([...products, newProduct]);
      setNewProduct({
        name: "",
        price: "",
        quantity: "",
        images: [],
        highlights: "",
        details: "",
        sizes: "",
        marketPrice: "",
      });
      setMessage("Product added successfully!");
    } else {
      setMessage("Please fill in all fields and upload at least 4 images.");
    }
  };

  const handleEditProduct = (index) => {
    setNewProduct(products[index]);
    setIsEditing(true);
    setEditIndex(index);
    setMessage("");
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedProducts = [...products];
    updatedProducts[editIndex] = newProduct;
    setProducts(updatedProducts);
    setIsEditing(false);
    setNewProduct({
      name: "",
      price: "",
      quantity: "",
      images: [],
      highlights: "",
      details: "",
      sizes: "",
      marketPrice: "",
    });
    setMessage("Product updated successfully!");
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    setMessage("Product deleted successfully.");
  };

  const handleOpenModal = (index) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Manage Products
      </h1>

      {/* Feedback Message */}
      {message && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4 shadow-md"
          role="alert"
        >
          <strong className="font-bold">{message}</strong>
          <span
            className="absolute top-0 right-0 px-4 py-3 cursor-pointer"
            onClick={() => setMessage("")}
          >
            <svg
              className="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.934 2.935a1 1 0 01-1.414-1.414l2.935-2.934-2.935-2.934a1 1 0 011.414-1.414L10 8.586l2.934-2.935a1 1 0 111.414 1.414l-2.935 2.934 2.935 2.934a1 1 0 010 1.414z" />
            </svg>
          </span>
        </div>
      )}

      {/* Add/Edit Product Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-300">
  <h2 className="text-2xl font-semibold text-blue-700 mb-4">
    {isEditing ? "Edit Product" : "Add New Product"}
  </h2>
  <form onSubmit={isEditing ? handleSaveEdit : handleAddProduct}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* Product Name */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-2" htmlFor="name">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Enter product name"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200"
        />
      </div>
      {/* Price */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-2" htmlFor="price">
          Price
        </label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Enter price"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200"
        />
      </div>
      {/* Quantity */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
          placeholder="Enter quantity"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200"
        />
      </div>
      {/* Images */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-2" htmlFor="images">
          Product Images (minimum 4)
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200"
        />
        {/* Image Previews */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          {newProduct.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Preview ${index + 1}`}
              className="h-24 object-cover rounded-lg border border-blue-200 shadow-md"
            />
          ))}
        </div>
      </div>
    </div>

    {/* Sizes and Market Price */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="flex flex-col">
        <label className="text-gray-600 mb-2" htmlFor="sizes">
          Sizes
        </label>
        <input
          type="text"
          name="sizes"
          value={newProduct.sizes}
          onChange={handleInputChange}
          placeholder="Enter sizes (comma separated)"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600 mb-2" htmlFor="marketPrice">
          Market Price
        </label>
        <input
          type="number"
          name="marketPrice"
          value={newProduct.marketPrice}
          onChange={handleInputChange}
          placeholder="Enter market price"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200"
        />
      </div>
    </div>

    {/* Highlights and Details */}
    <div className="flex flex-col mb-4">
      <label className="text-gray-600 mb-2" htmlFor="highlights">
        Highlights
      </label>
      <textarea
        name="highlights"
        value={newProduct.highlights}
        onChange={handleInputChange}
        placeholder="Enter product highlights"
        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200 h-24 resize-none"
      />
    </div>

    <div className="flex flex-col mb-4">
      <label className="text-gray-600 mb-2" htmlFor="details">
        Details
      </label>
      <textarea
        name="details"
        value={newProduct.details}
        onChange={handleInputChange}
        placeholder="Enter details about the product"
        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200 h-24 resize-none"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className={`w-full py-3 text-lg font-semibold ${
        isEditing
          ? "bg-yellow-600 hover:bg-yellow-700"
          : "bg-blue-600 hover:bg-blue-700"
      } text-white rounded-lg transition-colors shadow-md`}
    >
      {isEditing ? "Save Changes" : "Add Product"}
    </button>
  </form>
</div>


      {/* Products Card List */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform transform duration-200"
            >
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Product Image ${imgIndex + 1}`}
                    className="w-32 h-32 object-cover border border-gray-200 rounded-lg shadow-md"
                  />
                ))}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  Price:{" "}
                  <span className="font-bold text-blue-600">
                  ₹{product.price}
                  </span>
                </p>
                <p className="text-gray-600">
                  Market Price:{" "}
                  <span className="line-through text-gray-500">
                    ${product.marketPrice}
                  </span>
                </p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-gray-600">Sizes: {product.sizes}</p>
                <p className="text-gray-600">
                  Highlights: {product.highlights}
                </p>
                <p className="text-gray-600">Details: {product.details}</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEditProduct(index)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleOpenModal(index)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products added yet.</p>
      )}

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold">Confirm Deletion</h3>
            <p>Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDeleteProduct(editIndex);
                  handleCloseModal();
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
