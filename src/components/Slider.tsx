import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import iconNext from "../assets/icon-next.svg";
import iconPrev from "../assets/icon-previous.svg";
import {
  nextImage,
  prevImage,
  selectImages,
  selectCurrentIndex,
  setImages,
} from "../redux/appManagerSlice";
import "../styles/slider.css";

const Slider = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  const currentIndex = useSelector(selectCurrentIndex);

  useEffect(() => {
    const fetchedImages = [image1, image2, image3, image4];
    dispatch(setImages(fetchedImages));
  }, [dispatch]);

  const prev = () => {
    dispatch(prevImage());
  };
  const next = () => {
    dispatch(nextImage());
  };

  return (
    <>
      <div className="sliderContainer">
        <img
          className="arrowPrev"
          src={iconPrev}
          alt="icon-previous"
          onClick={prev}
        />
        {images.map((image, index) => (
          <img
            key={index}
            className={`sliderImage ${
              index === currentIndex ? "active" : "inactive"
            }`}
            src={image}
            alt={`productImage ${index + 1}`}
          />
        ))}

        <img
          className="arrowNext"
          src={iconNext}
          alt="icon-next"
          onClick={next}
        />
      </div>{" "}
    </>
  );
};
export default Slider;
