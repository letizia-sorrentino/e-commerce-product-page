import { useDispatch, useSelector } from "react-redux";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconCart from "../assets/icon-cart.svg";
import "../styles/addToCart.css";
import {
  decreaseQuantity,
  increaseQuantity,
  addToCart,
  //clearCart,
  selectItems,
} from "../redux/cartSlice";

const AddToCart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  return (
    <>
      <div className="buttonsContainer">
        <div className="quantiyButtonContainer">
          <img
            className="iconMinus"
            src={iconMinus}
            alt="iconMinus"
            onClick={() => {
              // if (items[0].quantity === 1) {
              //   dispatch(clearCart());
              // } else {
                dispatch(decreaseQuantity(items[0].id));
                console.log("decrease quantity");
              // }
            }}
          />
          <button className="quantityButton">{items[0].quantity}</button>
          <img
            className="iconPlus"
            src={iconPlus}
            alt="iconPlus"
            onClick={() => {
              dispatch(increaseQuantity(items[0].id));
              console.log("increase quantity");
            }}
          />
        </div>
        <div className="addToCartButtonContainer">
          <img className="iconCartButton" src={iconCart} alt="iconCart" />
          <button
            className="addToCartButton"
            onClick={() => {
              dispatch(addToCart(items[0]));
              console.log(items);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
export default AddToCart;
