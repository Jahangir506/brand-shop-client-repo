import { useEffect, useRef, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

let count = 0;
let slideInterval;
const Banner = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const sliderRef = useRef();

  const removeAnimation = () => {
    sliderRef.current.remove("fade-anim");
  };

  useEffect(() => {
    sliderRef.current.addEventListener("animationend", removeAnimation);
    sliderRef.current.addEventListener("mouseenter", pauseSlider);
    sliderRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % allImg.length;
    setCurrentImg(count);
    sliderRef.current.classList.add('fade-anim')
  };
  const handleOnPreviousClick = () => {
    const productsLength = allImg.length;
    count = (currentImg + productsLength - 1) % productsLength;
    setCurrentImg(count);
    sliderRef.current.classList.add('fade-anim')
  };

  const allImg = [`${slider1}`, `${slider2}`, `${slider3}`];

  return (
    <>
      <div>
        <div ref={sliderRef} className="w-full select-none relative mt-28">
          <div className="aspect-w-16 aspect-h-9">
            <img src={allImg[currentImg]} alt="" className="w-full h-full"/>
          </div>
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-5 flex justify-between items-center">
            <button onClick={handleOnPreviousClick} className="">
              <FcPrevious className="bg-white/20 hover:bg-white/30 p-3 text-orange-500 text-5xl rounded-full" />
            </button>
            <button onClick={handleOnNextClick}>
              <FcNext className="bg-white/20 hover:bg-white/30 text-orange-500 p-3 text-5xl rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
