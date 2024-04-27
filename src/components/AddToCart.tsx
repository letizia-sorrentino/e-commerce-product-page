import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconCart from "../assets/icon-cart.svg";
import "../styles/addToCart.css";
import {
  decreaseQuantity,
  increaseQuantity,
  addToCart,
  removeFromCart,
} from "../redux/cartSlice";
import { selectProducts } from "../redux/productSlice";
import { selectItems } from "../redux/cartSlice";

const AddToCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectItems);

  useEffect(() => {
    console.log("Products:", products);
  }, [products]);

  // useEffect(() => {
  //   console.log("cartItems:", cartItems);
  // }, []);

  return (
    <>
      {" "}
      <div>
        {" "}
        <div className="buttonsContainer">
          {cartItems.map((cartItem) => (
            <div className="quantityButtonContainer" key={cartItem.productId}>
              <img
                className="iconMinus"
                src={iconMinus}
                alt="iconMinus"
                onClick={() => {
                  if (cartItem.quantity === 1) {
                    dispatch(removeFromCart(cartItem.productId));
                  } else {
                    dispatch(decreaseQuantity(cartItem.productId));
                    console.log("decrease quantity", cartItem.quantity);
                  }
                }}
              />
              <div className="quantityButton">
                {" "}
                {cartItem.quantity > 0 ? cartItem.quantity : 0}{" "}
              </div>
              <img
                className="iconPlus"
                src={iconPlus}
                alt="iconPlus"
                onClick={() => {
                  dispatch(increaseQuantity(cartItem.productId));
                  console.log(
                    "increase quantity",
                    cartItem.quantity,
                    cartItems
                  );
                }}
              />
            </div>
          ))}
          {products.map((product) => (
            <div className="addToCartButtonContainer" key={product.id}>
              <img className="iconCartButton" src={iconCart} alt="iconCart" />
              <button
                className="addToCartButton"
                onClick={() => {
                  dispatch(addToCart(product.id));
                  console.log(product);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AddToCart;
