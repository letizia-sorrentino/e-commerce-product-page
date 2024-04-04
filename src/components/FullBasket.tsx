// import { useDispatch, useSelector } from "react-redux";
// import { //clearCart, 
//     selectItems } from "../redux/cartSlice";
// import deleteIcon from "../assets/icon-delete.svg";
const FullBasket = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectItems);


//   if (items[0].quantity > 0) {
    return (
      <><div className="fullBasket">
      <p>Basket is full</p>
        
          {/* <img src="" alt="" /> 
          <div>
            <h2 className="productName">{items[0].name}</h2>
            <p></p>
            <p></p>
          </div>
          <img
            src={deleteIcon}
            alt="deleteButton"
            onClick={() => {
              dispatch(clearCart());
              console.log("items deleted");
            }}
          /> */}
        </div> 
        {/* <button className="checkoutButton">Checkout</button> */} 
      </>
    );
//   }
};

export default FullBasket;
