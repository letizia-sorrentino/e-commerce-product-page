import { useSelector, useDispatch } from "react-redux";
import {
  openBurger,
  selectBurgerOpen,
  toggleBasket,
} from "../redux/appManagerSlice";
import burgerIcon from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import "../styles/header.css";
import BasketModal from "./BasketModal";

const Header = () => {
  const isBurgerOpen = useSelector(selectBurgerOpen);

  const dispatch = useDispatch();

  const openBurgerMenu = () => {
    dispatch(openBurger());
  };

  const toggleCart = () => {
    dispatch(toggleBasket());
    console.log("clicked");
  };

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="burgerContainer">
            <img
              className={`${isBurgerOpen ? "hidden" : "burgerIcon"}`}
              src={burgerIcon}
              alt="burger-icon"
              onClick={() => openBurgerMenu()}
            />
            <MobileMenu />
          </div>
          <img className="logo" src={logo} alt="logo" />
          <DesktopMenu />

          <img
            className="cartIcon"
            src={cart}
            alt="icon-cart"
            onClick={() => toggleCart()}
          />
          <BasketModal />
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </header>
    </>
  );
};

export default Header;
