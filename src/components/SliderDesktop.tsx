import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import iconNext from "../assets/icon-next.svg";
import iconPrev from "../assets/icon-previous.svg";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import {
  setCurrentImage,
  openLightbox,
  setCurrentIndex,
  selectIsOpen,
  selectCurrentIndex,
  setLightboxImages,
  selectLightboxImages,
  setNextImage,
  setPreviousImage,
} from "../redux/lightboxSlice";
import "../styles/sliderDesktop.css";

const SliderDesktop = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectLightboxImages);
  const currentIndex = useSelector(selectCurrentIndex);
  const lightboxIndex = useSelector(selectCurrentIndex);
  const isLightboxOpen = useSelector(selectIsOpen);

  const prev = () => {
    dispatch(setPreviousImage());
    console.log(currentIndex);
  };
  const next = () => {
    dispatch(setNextImage());
    console.log(currentIndex);
  };
  useEffect(() => {
    console.log(lightboxIndex);
  }, [lightboxIndex]);

  useEffect(() => {
    const fetchedImages = [image1, image2, image3, image4];
    dispatch(setLightboxImages(fetchedImages));
  }, [dispatch]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
  }, [isLightboxOpen]);
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
        {/* If isLightboxOpen is true, render the Lightbox component. Otherwise, render nothing. */}
        {isLightboxOpen && (
          <div className="lightboxContainer">
            <img
              className="arrowPrev"
              src={iconPrev}
              alt="icon-previous"
              onClick={prev}
            />
            <div className="lightboxImage">
              {" "}
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
                    console.log(currentIndex);
                  }}
                />
              ))}
            </div>

            <img
              className="arrowNext"
              src={iconNext}
              alt="icon-next"
              onClick={next}
            />
            <div className="sliderDotsLightbox">
              {images.map((_, index) => (
                <img
                  key={index}
                  className={`sliderDotLightbox ${
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
          </div>
        )}

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
