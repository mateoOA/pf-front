import {Route, Routes, useLocation} from "react-router-dom"  

import './App.css'
<<<<<<< Updated upstream
import Landing from "./views/Landing/Landing";
=======
import Landing from "./views/Landing/Landing"
>>>>>>> Stashed changes
import Home from "./views/home/home";
import Product from "./views/Products/Products";
import Detail from "./views/Detail/Detail";
import Profile from "./views/Myaccount/Myaccount";
import Us from "./views/Aboutus/us";
<<<<<<< Updated upstream
// import Error from "./views/error/error";
import NavBar from "./components/navBar/navBar";
=======
import NavBar from "./components/navBar/navBar";
import Cart from "./views/Cart/Cart";

>>>>>>> Stashed changes

function App() {
  const {pathname} = useLocation();
  return (
    <>
    {pathname !== "/" && <NavBar/>}
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path='/Detail/:id' element={<Detail/>}/>
                <Route path="/aboutus" element={<Us/>}/>
                <Route path="/myaccount" element={<Profile/>}/>
<<<<<<< Updated upstream
                <Route path="*" element={<Error />} />
=======
                <Route path="/cart" element={<Cart/>}/>
>>>>>>> Stashed changes
            </Routes>
    </>
  )
}

export default App
