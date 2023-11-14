import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import "../styles/slider.css";

const Slider = () => {
  return (
    <>
      <img className="sliderImage" src={image1} alt="productImage" />
      <img className="sliderImage" src={image2} alt="productImage" />
      <img className="sliderImage" src={image3} alt="productImage" />
      <img className="sliderImage" src={image4} alt="productImage" />
    </>
  );
};
export default Slider;
