import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <div className="AppMain">
        <Header /> 
        <Slider />
      </div>
      <Footer />
    </>
  );
};

export default App;
