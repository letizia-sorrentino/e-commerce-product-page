import { useSelector } from "react-redux";
import AddToCart from "./AddToCart";

import { selectItems } from "../redux/cartSlice";
import "../styles/productPage.css";

const ProductPage = () => {
  const items = useSelector(selectItems);

  const applyDiscont = () => {
    const discount = 0.5;
    const price = items[0].price;
    return discount * price;
  };

  return (
    <>
      <div className="productInfoContainer">
        <p className="brand">{items[0].brand}</p>
        <h2 className="productName">{items[0].name}</h2>
        <p className="productDescription">{items[0].description}</p>
      </div>
      <div className="priceContainer">
        <p className="discountedPrice">${applyDiscont().toFixed(2)} </p>
        <p className="discount">50%</p>
        <p className="fullPrice"> ${items[0].price.toFixed(2)}</p>
      </div>
      <AddToCart />
    </>
  );
};
export default ProductPage;
