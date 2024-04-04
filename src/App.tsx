// import { useDispatch, useSelector } from "react-redux";
// import { selectItems, getTotal } from "../src/redux/cartSlice";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductPage from "./components/ProductPage";
// import Footer from "./components/Footer";
import "./styles/app.css";
// import { useEffect } from "react";

const App = () => {
  // const items = useSelector(selectItems);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [items, dispatch]);
  return (
    <>
      <div className="AppMain">
        <Header />
        <Slider />
        <ProductPage />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
