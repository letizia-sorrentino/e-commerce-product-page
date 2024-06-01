import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

  const handleImageClick = () => {
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
    <div className="sliderContainerDesktop">
      {images.map((image, index) => (
        <img
          key={index}
          className={`sliderImageDesktop ${
            index === currentIndex ? "active" : "inactive"
          }`}
          src={image}
          alt={`productImageDesktop ${index + 1}`}
          onClick={handleImageClick}
        />
      ))}

      {/* If isLightboxOpen is true, render the Lightbox component. Otherwise, render nothing. */}
      {isLightboxOpen && (
        <div className="lightboxContainer">
          <button className="iconClose" onClick={close}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"></path>
            </svg>
          </button>

          <button className="arrowPrev" onClick={prev}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 3 9l8 8"></path>
            </svg>
          </button>

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
          <button className="arrowNext" onClick={next}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1 8 8-8 8"></path>
            </svg>
          </button>

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
    </div>
  );
};
export default SliderDesktop;
