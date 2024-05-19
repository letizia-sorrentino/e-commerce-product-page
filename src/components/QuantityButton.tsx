import { useDispatch, useSelector } from "react-redux";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import "../styles/addToCart.css";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  selectItems,
} from "../redux/cartSlice";

const QuantityButton = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);

  if (cartItems.length === 0) {
    return (
      <div className="quantityButtonContainer">
        {" "}
        <img className="iconMinus" src={iconMinus} alt="iconMinus" />
        <div className="quantityButton">0</div>
        <img className="iconPlus" src={iconPlus} alt="iconPlus" />
      </div>
    );
  }

  return cartItems.map((cartItem, index) => (
    <div className="quantityButtonContainer" key={index}>
      <img
        className="iconMinus"
        src={iconMinus}
        alt="iconMinus"
        onClick={() => {
          if (cartItem.quantity === 1) {
            dispatch(removeFromCart(cartItem.productId));
          } else if (cartItem.quantity > 1) {
            dispatch(decreaseQuantity(cartItem.productId));
            console.log(cartItem);
          }
        }}
      />
      <div className="quantityButton">{cartItem.quantity}</div>
      <img
        className="iconPlus"
        src={iconPlus}
        alt="iconPlus"
        onClick={() => {
          if (cartItem.quantity === 0) {
            dispatch(addToCart(cartItem));
          } else {
            dispatch(increaseQuantity(cartItem.productId));
            console.log(cartItem);
          }
        }}
      />
    </div>
  ));
};

export default QuantityButton;
