// import { useSelector } from "react-redux";
// import { selectBasketOpen } from "../redux/appManagerSlice";
// import { selectTotalItems } from "../redux/cartSlice";
// import "../styles/basketModal.css";
// import EmptyBasket from "./EmptyBasket";
// import FullBasket from "./FullBasket";

const BasketModal = () => {
  // const isBasketOpen = useSelector(selectBasketOpen);
  // const totalItems = useSelector(selectTotalItems);

  return (
    <>
      {/* <div className={`${isBasketOpen ? "showModal" : "hiddenModal"}`}>
        <h2 className="modalTitle">Cart</h2>
        <div className="basketContainer">
          {totalItems > 0 ? <EmptyBasket /> : <FullBasket />}
        </div>
      </div> */}
    </>
  );
};

export default BasketModal;
