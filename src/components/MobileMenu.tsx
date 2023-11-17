import { useSelector, useDispatch } from "react-redux";
import { selectBurgerOpen, setBurgerOpen } from "../redux/appManagerSlice";
import iconClose from "../assets/icon-close.svg";
const MobileMenu = () => {
  const isBurgerOpen = useSelector(selectBurgerOpen);
  const dispatch = useDispatch();

  const closeBurgerMenu = (isBurgerOpen: boolean) => {
    dispatch(setBurgerOpen(isBurgerOpen));
  };
  return (
    <>
      <div className={`${isBurgerOpen ? "mobileMenu" : "hidden"}`}>
        <img
          className={`${isBurgerOpen ? "iconClose" : "hidden"}`}
          src={iconClose}
          alt="icon-close"
          onClick={() => closeBurgerMenu(isBurgerOpen)}
        />
        <ul className={`${isBurgerOpen ? "flex" : "hidden"}`}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
