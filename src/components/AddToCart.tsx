// import { useDispatch, useSelector } from "react-redux";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconCart from "../assets/icon-cart.svg";
import "../styles/addToCart.css";
// import // decreaseQuantity,
// // increaseQuantity,
// // selectCartItem,
// "../redux/cartSlice";

const AddToCart = () => {
  //const dispatch = useDispatch();
  //const items = useSelector(selectCartItem);

  return (
    <>
      <div className="buttonsContainer">
        <div className="quantiyButtonContainer">
          <img
            className="iconMinus"
            src={iconMinus}
            alt="iconMinus"
            // onClick={() => {
            //   dispatch(decreaseQuantity());
            // }}
          />
          <button className="quantityButton">0</button>
          <img
            className="iconPlus"
            src={iconPlus}
            alt="iconPlus"
            // onClick={() => {
            //   dispatch(increaseQuantity());
            // }}
          />
        </div>
        <button className="addToCartButton">
          <img className="iconCartButton" src={iconCart} alt="iconCart" />
          Add to cart
        </button>
      </div>
    </>
  );
};
export default AddToCart;
