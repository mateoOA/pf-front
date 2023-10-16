import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";

import "./App.css";
/* import Landing from "./views/Landing/Landing"; */
import Home from "./views/home/home";
import Product from "./views/Products/Products";
import Detail from "./views/Detail/Detail";
import Profile from "./views/Myaccount/Myaccount";
import Us from "./views/Aboutus/us";
import Error from "./views/error/error";

import Form from "./views/FormProduct/Form"

import NavBar from "./components/navBar/navBar";
import Cart from "./views/cart/cart";


function App() {
  const { pathname } = useLocation();
  return (


    <>
      {pathname !== "/" && <NavBar />}
      <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/aboutus" element={<Us />} />
        <Route path="/myaccount" element={<Profile />} />
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Form" element={<Form/>}/>
   
      </Routes>
    </>
  );

}

export default App;
