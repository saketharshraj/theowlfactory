import React from "react";
import { menuItems } from "./Menu";
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";
import AnimatedLogo from "../Logo/AnimatedLogo";
import logo from "../images/logo.jpeg"
const Navbar = () => {

    // const [count, setCount] = useState(0);

    const menu = menuItems.map(({ name, url }, index) => {
        return (<li key={index}>< Link to = {url} >{name}</Link></li >
        );    
    });

    return (<nav>
        <div className="logo">
            <img style={{borderRadius:"50%", width:"50px", height:"50px"}} src={logo} alt="theOwlfactory Logo" />
            <p style={{fontFamily:"sans-serif", fontSize: "5vh", display:"flex", flexWrap:"wrap"}}>theOwlFactory</p>
        </div>
        <ul className="menu-list">
            <li><Link to="/cart"><FaShoppingCart color='rgb(26, 26, 26)' size={25} /></Link></li>
        </ul>
    </nav>);
}

export default Navbar;