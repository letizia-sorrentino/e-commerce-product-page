import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getTotal,
  // removeFromCart,
  selectItems,
  selectTotalCost,
  selectTotalItems,
} from "../redux/cartSlice";
import productImage from "../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/icon-delete.svg";
const FullBasket = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);

  if (cartItems.length > 0) {
    return (
      <>
        <div className="fullBasket">
          <img src={productImage} className="productImage" alt="productImage" />
          {cartItems.map((cartItem, index) => (
            <div className="cartItemContainer" key={index}>
              <p className="cartItemName">
                {cartItem.name}
              </p>
              <div className="cartItemTotal">
                {" "}
                <p className="cartItemPrice">${cartItem.price} x</p>
                <p>{totalItems}</p>
                <p> ${totalCost}</p>{" "}
              </div>
            </div>
          ))}
          <img
            src={deleteIcon}
            alt="deleteButton"
            onClick={() => {
              dispatch(clearCart());
              console.log("items deleted");
            }}
          />
        </div>
        <button className="checkoutButton">Checkout</button>
      </>
    );
  }
};

export default FullBasket;
