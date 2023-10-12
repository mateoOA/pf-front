import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
    const {pathname} = useLocation();
    return (
        <div>
             <div>
            {pathname !== "/"&&
            <NavLink to="/home"><button>Home</button></NavLink>}
            {pathname !== "/"&&
            <NavLink to="/Products"><button>Productos</button></NavLink>}
            {pathname !== "/"&&
            <NavLink to="/Aboutus"><button>About Us</button></NavLink>}
            {pathname !== "/"&&
            <NavLink to="/Myaccount"><button>My acount</button></NavLink>}
        </div>
        </div>
    )
}