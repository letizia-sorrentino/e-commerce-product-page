import { useSelector, useDispatch } from "react-redux";
import {
  openBurger,
  selectBurgerOpen,
  toggleBasket,
} from "../redux/appManagerSlice";
import { selectTotalItems } from "../redux/cartSlice";
import burgerIcon from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import BasketModal from "./BasketModal";
import "../styles/header.css";

const Header = () => {
  const isBurgerOpen = useSelector(selectBurgerOpen);
  const totalQuantity = useSelector(selectTotalItems);
  const dispatch = useDispatch();

  const openBurgerMenu = () => {
    dispatch(openBurger());
  };

  const toggleCart = () => {
    dispatch(toggleBasket());
  };

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="leftContainer">
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
          </div>
          <div className="rightContainer">
            <div className="cartIconContainer">
              <img
                className="cartIcon"
                src={cart}
                alt="icon-cart"
                onClick={() => toggleCart()}
              />{" "}
              {totalQuantity > 0 && (
                <span className="quantitySticker">{totalQuantity}</span>
              )}
            </div>
            <BasketModal />
            <img className="avatar" src={avatar} alt="avatar" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
