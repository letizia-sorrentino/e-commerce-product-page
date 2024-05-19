import { useDispatch, useSelector } from "react-redux";
import iconCart from "../assets/icon-cart.svg";
import { addToCart } from "../redux/cartSlice";
import { selectProducts } from "../redux/productSlice";
import { selectItems, increaseQuantity } from "../redux/cartSlice";
import "../styles/addToCart.css";

const AddToCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectItems);
  return (
    <div>
      {products.map((product) => (
        <div className="addToCartButtonContainer" key={product.id}>
          <img className="iconCartButton" src={iconCart} alt="iconCart" />
          <button
            className="addToCartButton"
            onClick={() => {
              if (cartItems.length > 0) {
                dispatch(increaseQuantity(product.id));
              } else {
                dispatch(addToCart(product));
              }
              console.log(product);
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
export default AddToCart;
