import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="burgerContainer">
          <img className="burgerMenu" src={menu} alt="burger-menu" />
        </div>
        <img className="logo" src={logo} alt="logo" />
        <img className="iconCart" src={cart} alt="icon-cart" />
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </>
  );
};

export default Header;
