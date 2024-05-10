import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="AppMain">
        <Slider />
        <ProductPage />
      </div>
      <Footer />
    </>
  );
};

export default App;
