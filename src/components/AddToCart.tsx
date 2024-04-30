// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import iconCart from "../assets/icon-cart.svg";
// import "../styles/addToCart.css";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from "../redux/cartSlice";
// import { selectItems } from "../redux/cartSlice";

const AddToCart = () => {
  //const dispatch = useDispatch();
  // const cartItems = useSelector(selectItems);

  // useEffect(() => {
  //   console.log("cartItems:", cartItems);
  // }, []);
  // console.log(cartItems);

  return (
    <div>
      {/* {products.map((product) => (
            <div className="addToCartButtonContainer" key={product.id}>
              <img className="iconCartButton" src={iconCart} alt="iconCart" />
              <button
                className="addToCartButton"
                onClick={() => {
                  // dispatch(addToCart(product.id));
                  console.log(product);
                }}
              >
                Add to cart
              </button>
            </div>
          ))} */}
    </div>
  );
};
export default AddToCart;
