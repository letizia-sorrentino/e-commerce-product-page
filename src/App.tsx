import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductPage from "./components/ProductPage";
// import Footer from "./components/Footer";
import "./styles/app.css";

const App = () => {
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
