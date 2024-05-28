import { useSelector, useDispatch } from "react-redux";
import iconNext from "../assets/icon-next.svg";
import iconPrev from "../assets/icon-previous.svg";
import {
  nextImage,
  prevImage,
  selectCurrentIndex,
} from "../redux/appManagerSlice";
import { selectCurrentImage } from "../redux/lightboxSlice";
import "../styles/lightbox.css";

const Lightbox = () => {
  const dispatch = useDispatch();
  const currentImage = useSelector(selectCurrentImage);
  const currentIndex = useSelector(selectCurrentIndex);

  const prev = () => {
    dispatch(prevImage());
    console.log(currentIndex, currentImage);
  };
  const next = () => {
    dispatch(nextImage());
    console.log(currentIndex, currentImage);
  };

  return (
    <>
      <div className="lightboxContainer">
        <img
          className="arrowPrev"
          src={iconPrev}
          alt="icon-previous"
          onClick={prev}
        />

        <img
          className="lightboxImage"
          src={currentImage}
          alt={`productImage ${currentIndex + 1}`}
        />

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
export default Lightbox;
