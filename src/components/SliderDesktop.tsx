import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Lightbox from "./Lightbox";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import { setImages, selectImages } from "../redux/appManagerSlice";
import {
  setCurrentImage,
  openLightbox,
  setCurrentIndex,
  selectIsOpen,
  selectCurrentIndex,
} from "../redux/lightboxSlice";
import "../styles/sliderDesktop.css";

const SliderDesktop = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  const currentIndex = useSelector(selectCurrentIndex);
  const isLightboxOpen = useSelector(selectIsOpen);

  useEffect(() => {
    const fetchedImages = [image1, image2, image3, image4];
    dispatch(setImages(fetchedImages));
  }, [dispatch]);

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
            onClick={() => {
              dispatch(setCurrentImage(image));
              dispatch(setCurrentIndex(index));
              dispatch(openLightbox());
              console.log(currentIndex);
            }}
          />
        ))}

        {isLightboxOpen && <Lightbox />}

        <div className="sliderDotsDesktop">
          {images.map((_, index) => (
            <img
              key={index}
              className={`sliderDotDesktop ${
                index === currentIndex ? "activeDot" : "inactiveDot"
              }`}
              src={images[index]}
              onClick={() => {
                dispatch(setCurrentImage(images[index]));
                dispatch(setCurrentIndex(index));
              }}
            ></img>
          ))}
        </div>
      </div>{" "}
    </>
  );
};
export default SliderDesktop;
