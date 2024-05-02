import { useSelector } from "react-redux";
import { selectBasketOpen } from "../redux/appManagerSlice";
import { selectItems } from "../redux/cartSlice";
import "../styles/basketModal.css";
import EmptyBasket from "./EmptyBasket";
import FullBasket from "./FullBasket";

const BasketModal = () => {
  const isBasketOpen = useSelector(selectBasketOpen);
  const items = useSelector(selectItems);

  return (
    <>
      <div className={`${isBasketOpen ? "showModal" : "hiddenModal"}`}>
        <h2 className="modalTitle">Cart</h2>
        <div className="basketContainer">
          {items.length > 0 ? <FullBasket /> : <EmptyBasket />}
        </div>
      </div>
    </>
  );
};

export default BasketModal;
