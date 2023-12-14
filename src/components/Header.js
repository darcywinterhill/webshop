import "./styling/Header.css";

import cart from "../images/cart.png";

import HamburgerMenu from "./UI/HamburgerMenu";
import Brand from "./Brand";
import NavBar from "./UI/NavBar";

const Header = () => {
  return (
    <header>
      <HamburgerMenu />
      <Brand />
      <NavBar />
      <img 
        className="Cart" 
        src={cart} 
        alt="cart icon" 
      />
    </header>
  )
}

export default Header;