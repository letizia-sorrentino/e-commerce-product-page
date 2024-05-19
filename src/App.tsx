import { useSelector } from "react-redux";
import { selectBurgerOpen } from "./redux/appManagerSlice";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import "./index.css";
import { useEffect } from "react";

const App = () => {
  const isBurgerOpen = useSelector(selectBurgerOpen);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
  }, [isBurgerOpen]);

  return (
    <>
      {" "}
      <Header />
      <div className="appMain">
        <Slider />
        <ProductPage />
      </div>
      <Footer />
    </>
  );
};

export default App;
