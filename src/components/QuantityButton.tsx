// import { useDispatch, useSelector } from "react-redux";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import "../styles/addToCart.css";
// import {
//   decreaseQuantity,
//    increaseQuantity,
//    removeFromCart,
// } from "../redux/cartSlice";
// import { selectItems } from "../redux/cartSlice";

const QuantityButton = () => {
//   const dispatch = useDispatch();
//   // const cartItems = useSelector(selectItems);


//   // useEffect(() => {
//   //   console.log("cartItems:", cartItems);
//   // }, []);
//   // console.log(cartItems);

  return (
    <>
      {" "}
      <div>
        {" "}
        <div className="buttonsContainer">
          {/* {cartItems.map((cartItem) => (
            <div className="quantityButtonContainer" key={cartItem.productId}>
              <img
                className="iconMinus"
                // src={iconMinus}
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
          ))} */}

          <div className="quantityButtonContainer">
            <img
              className="iconMinus"
              src={iconMinus}
              alt="iconMinus"
            />
            <div className="quantityButton">0</div>
            <img className="iconPlus" src={iconPlus} alt="iconPlus" />
          </div>
        </div>
      </div>
    </>
  );
};
export default QuantityButton;
