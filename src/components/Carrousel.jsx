import { useState } from "react";
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import "../style/Carrousel.css";

//Prends les images ainsi que leur position contenues dans le props slides pour générer le carrousel et ces fonctionnalités
const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  let displayArrow = true;
  if (slides.length <= 1) {
    displayArrow = false;
  }
  return (
    <div className="crsl-sliderStyle">
      <div
        style={!displayArrow ? { display: "none" } : {}}
        className="crsl-leftArrow"
        onClick={goToPrevious}
      >
        <img src={leftArrow} alt="left arrow" />
      </div>
      <div
        style={!displayArrow ? { display: "none" } : {}}
        className="crsl-rightArrow"
        onClick={goToNext}
      >
        <img src={rightArrow} alt="right arrow" />
      </div>
      <div className="crsl-position">
        <p>
          {currentIndex + 1}/{slides.length}
        </p>
      </div>
      <img src={slides[currentIndex]} alt="Carrousel" className="crsl-image" />
    </div>
  );
};

export default Carrousel;
