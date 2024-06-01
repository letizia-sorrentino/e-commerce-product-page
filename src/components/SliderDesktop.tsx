import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import iconNext from "../assets/icon-next.svg";
import iconPrev from "../assets/icon-previous.svg";
import iconClose from "../assets/icon-close.svg";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import {
  openLightbox,
  closeLightbox,
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
  const isLightboxOpen = useSelector(selectIsOpen);

  const open = () => {
    dispatch(openLightbox());
  };

  const prev = () => {
    dispatch(setPreviousImage());
  };
  const next = () => {
    dispatch(setNextImage());
  };

  const close = () => {
    dispatch(closeLightbox());
  };

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
            onClick={open}
          />
        ))}

        {/* If isLightboxOpen is true, render the Lightbox component. Otherwise, render nothing. */}
        {isLightboxOpen && (
          <div className="lightboxContainer">
            <img
              className="iconClose"
              src={iconClose}
              onClick={close}
              alt="icon-close"
            />
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
                  onClick={next}
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
                  // onClick={() => {
                  //   dispatch(setCurrentImage(images[index]));
                  //   dispatch(setCurrentIndex(index));
                  // }}
                  onClick={next}
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
              onClick={next}
            ></img>
          ))}
        </div>
      </div>{" "}
    </>
  );
};
export default SliderDesktop;
