import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import Landing from "./views/landing/landing";
import Home from "./views/home/home"; 
import Product from "./views/product/product";
import Profile from "./views/profile/profile";
import Store from "./views/store/store";
import Us from "./views/us/us";
import Error from "./views/error/error";

function App() {
  return (
    <Router>
        <>
            <Routes>            
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/us" element={<Us/>}/>
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    </Router>
  )
}

export default App
