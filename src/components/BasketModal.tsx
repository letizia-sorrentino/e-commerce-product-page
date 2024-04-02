import { useSelector } from "react-redux";
import { selectBasketOpen } from "../redux/appManagerSlice";
import "../styles/basketModal.css";

const BasketModal = () => {
  const isBasketOpen = useSelector(selectBasketOpen);

  return (
    <>
      <div className={`${isBasketOpen ? "hiddenModal" : "showModal"}`}>
        <p>Cart</p>
        <p>Your basket is empty.</p>
      </div>
    </>
  );
};

export default BasketModal;
