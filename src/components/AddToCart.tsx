import { useDispatch, useSelector } from "react-redux";
import iconCart from "../assets/icon-cart.svg";
import { addToCart } from "../redux/cartSlice";
import { selectProducts } from "../redux/productSlice";
import { store } from "../redux/store";
import "../styles/addToCart.css";


const AddToCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  return (
    <div>
      {products.map((product) => (
        <div className="addToCartButtonContainer" key={product.id}>
          <img className="iconCartButton" src={iconCart} alt="iconCart" />
          <button
            className="addToCartButton"
            onClick={() => {
              store.dispatch(addToCart(product.id));
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
