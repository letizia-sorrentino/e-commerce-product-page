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
import "../styles/sliderDesktop.css";

const SliderDesktop = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  const currentIndex = useSelector(selectCurrentIndex);

  useEffect(() => {
    const fetchedImages = [image1, image2, image3, image4];
    dispatch(setImages(fetchedImages));
  }, [dispatch]);

  const prev = () => {
    dispatch(prevImage());
    console.log(currentIndex, images);
  };
  const next = () => {
    dispatch(nextImage());
    console.log(currentIndex, images);
  };

  return (
    <>
      <div className="sliderContainerDesktop">
        {images.map((image, index) => (
          <img
            key={index}
            className={`sliderImageDesktop ${
              index === currentIndex ? "active" : "inactive"
            }`}
            src={image}
            alt={`productImageDesktop ${index + 1}`}
          />
        ))}

        <div className="sliderDotsDesktop">
          {images.map((image, index) => (
            <img
              key={index}
              className={`sliderDotDesktop ${
                index === currentIndex ? "activeDot" : "inactiveDot"
              }`}
              src={image}
            ></img>
          ))}
        </div>


        {/* <img
          className="arrowPrevDesktop"
          src={iconPrev}
          alt="icon-previous"
          onClick={prev}
        />
        <img
          className="arrowNextDesktop"
          src={iconNext}
          alt="icon-next"
          onClick={next}
        /> */}
      </div>{" "}
    </>
  );
};
export default SliderDesktop;
