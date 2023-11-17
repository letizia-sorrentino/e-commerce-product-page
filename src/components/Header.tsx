import { useSelector, useDispatch } from "react-redux";
import { setBurgerOpen, selectBurgerOpen } from "../redux/appManagerSlice";
import burgerIcon from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import "../styles/header.css";

const Header = () => {
  const isBurgerOpen = useSelector(selectBurgerOpen);
  const dispatch = useDispatch();

  const openBurgerMenu = (isBurgerOpen: boolean) => {
    dispatch(setBurgerOpen(!isBurgerOpen));
  };

  return (
    <>
      <div className="headerContainer">
        <div className="burgerContainer">
          <img
            className={`${isBurgerOpen ? "hidden" : "burgerIcon"}`}
            src={burgerIcon}
            alt="burger-icon"
            onClick={() => openBurgerMenu(isBurgerOpen)}
          />
          <MobileMenu />
        </div>
        <img className="logo" src={logo} alt="logo" />
        <DesktopMenu />
        <img className="iconCart" src={cart} alt="icon-cart" />
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </>
  );
};

export default Header;
