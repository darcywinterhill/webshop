import "./styling/Header.css";

import cart from "../images/cart.png";

import HamburgerMenu from "./UI/HamburgerMenu";
import Brand from "./Brand";
import NavBar from "./UI/NavBar";

const Header = ({ state }) => {
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
      {state}
    </header>
  )
}

export default Header;