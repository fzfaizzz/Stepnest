// App.js
import React, { useEffect, useState } from "react";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./component/Mainpage";
import Hero from "./component/Hero";
import Policy from "./component/Policy";
import About from "./component/About";
import SeeMoreProducts from "./component/SeeMore";
import Cart from "./component/Cart";
import ProductCard from "./component/ProductCard";
import { Checkout } from "./component/Checkout";
import Order from "./component/Order";
import OrderDetail from "./component/OrderDetail";
import NotFound from "./component/NotFound";
import ProductComponent from "./component/ProductComponent";
import Header from "./Admin/Header";
import Dashboard from "./Dashboard";
import AdminProduct from "./Admin/AdminProduct";
import Delivery from "./component/Delivery";
import OrderSummary from "./component/OrderSummary";
// import Footer from "./component/Footer";

// Clerk publishable key
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {

  const [addressData, setAddressData] = useState([]);

  const [products, setProducts] = useState([]); 
  const [cartAll, setCartAll] = useState([]); 

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/explore"
            element={<Hero cartAll={cartAll} setCartAll={setCartAll} />}
          />
          <Route
            path="/see-more"
            element={
              <SeeMoreProducts setCartAll={setCartAll} cartAll={cartAll} />
            }
          />{" "}
          {/* Passing cartAll and setCartAll */}
          <Route path="/policy" element={<Policy />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cartAll={cartAll} setCartAll={setCartAll} />}
          />{" "}
          {/* Passing cartAll */}
          <Route path="/checkout" element={<Checkout cartAll={cartAll} />} />
          <Route path="/order" element={<Order />} /> {/* Passing orderId */}
          <Route path="/orderdetails" element={<OrderDetail />} />
          <Route
            path="/product/:Id"
            element={<ProductCard setCartAll={setCartAll} cartAll={cartAll} />}
          ></Route>
          <Route
            path="/productcomponent"
            element={
              <ProductComponent cartAll={cartAll} setCartAll={setCartAll} />
            }
          ></Route>
          <Route
            path="/productcard"
            element={<ProductCard setCartAll={setCartAll} cartAll={cartAll} />}
          ></Route>
          <Route
            path="/delivery"
            element={<Delivery setAddressData={setAddressData} />}
          ></Route>

          <Route
            path="/orderSummary"
            element={<OrderSummary />}
          ></Route>

          {/* Auth Routes */}
          <Route path="/sign-in/*" element={<SignIn />} />
          <Route path="/sign-up/*" element={<SignUp />} />


          {/* Admin Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/header" element={<Header />} />
          <Route path="/adminProducts" element={<AdminProduct/>} />
          {/* <Route path="/adminOrders" element={<Orders />} /> */}
          {/* <Route path="/admin/users" element={<Users />} /> */}
          {/* <Route path="/admin/settings" element={<Settings />} />  */}
        </Routes>
        {/* <Footer/> */}
      </Router>
    </ClerkProvider>
  );
}

export default App;
