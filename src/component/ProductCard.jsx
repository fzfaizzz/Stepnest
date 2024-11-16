"use client";

import React, { useState } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react"; // Importing Radio and RadioGroup
import Nav from "./Nav";
import ProductComponent from "./ProductComponent";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify"; // Import Toast for notifications
import "react-toastify/dist/ReactToastify.css";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "/images/prodect2.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "/images/earth.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "5", inStock: false },
    { name: "6", inStock: true },
    { name: "7", inStock: true },
    { name: "8", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const suggestedProducts = [
  {
    id: 1,
    name: "Casual Jacket",
    price: "$120",
    imageSrc: "/images/jacket.jpg",
    imageAlt: "A casual jacket.",
  },
  {
    id: 2,
    name: "Sport Shoes",
    price: "$80",
    imageSrc: "/images/shoes.jpg",
    imageAlt: "A pair of sport shoes.",
  },
  {
    id: 3,
    name: "Leather Wallet",
    price: "$40",
    imageSrc: "/images/wallet.jpg",
    imageAlt: "A leather wallet.",
  },
  {
    id: 4,
    name: "Cap",
    price: "$25",
    imageSrc: "/images/cap.jpg",
    imageAlt: "A black cap.",
  },
];

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductCard = ({ cartAll, setCartAll}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [activeImage, setActiveImage] = useState(product.images[0]);

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
      setCartAll([...cartAll, { ...product, id: product.id, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-white">
      <ToastContainer />
      <Nav />
      <div className="pt-6">
        <nav aria-label="Breadcrumb"></nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] lg:block">
              <img
                alt={activeImage.alt}
                src={activeImage.src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item, index) => (
                <div
                  key={index}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 cursor-pointer"
                  onClick={() => setActiveImage(item)} // On click, change the main image
                >
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-16 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="text-3xl font-semibold ">{product.price}</p>
                <p className="opacity-50 line-through">2000</p>
                <p className="text-green-600">5%</p>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="-mt-5">
                  <p className=" text-xl">Sizes</p>
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? selectedSize.name === size.name
                              ? "bg-indigo-600 text-white"
                              : "bg-white text-gray-900"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                        )}
                      >
                        <span>{size.name}</span>
                      </Radio>
                    ))}
                  </RadioGroup>
                </div>

                {/* Add to cart button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart({ ...product, id: product.id });
                  }}
                  className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add To Cart
                </button>
              </form>
            </div>

            {/* Description and details */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Products Section */}
         <section className="bg-gray-100 -mt-28 pt-2 ">
          <h2 className="text-lg font-bold text-gray-900 text-center">Suggested Products</h2>
          <ProductComponent  cartAll={cartAll} setCartAll={setCartAll}/>
        </section> 
      </div> 

      
      <div className="-mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ProductCard;
