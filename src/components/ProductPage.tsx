import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "../data/data.json";
import AddToCart from "./AddToCart";
import { fetchProducts, selectProducts } from "../redux/productSlice";
import "../styles/productPage.css";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  // send products to the store
  useEffect(() => {
    const fetchedProducts = [data];
    dispatch(fetchProducts(fetchedProducts));
    // console.log(fetchedProducts);
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div className="productContainer" key={product.id}>
          <div className="productInfoContainer">
            <p className="brand">{product.brand}</p>
            <h2 className="productName">{product.name}</h2>
            <p className="productDescription">{product.description}</p>
          </div>
          <div className="priceContainer">
            <p className="discountedPrice">
              ${(() => (1 - 0.5) * product.price)().toFixed(2)}
            </p>
            <p className="discount">50%</p>
            <p className="fullPrice">{product.price.toFixed(2)}</p>
          </div>
          <AddToCart />
        </div>
      ))}
    </div>
  );
};
export default ProductPage;
