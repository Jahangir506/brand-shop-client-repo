import { Link } from "react-router-dom";
import oneplus from "../../assets/images/oneplus.jpg";
import samsung from "../../assets/images/samsung.jpg";

const Discover = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <img
            src={oneplus}
            className=" rounded-lg shadow-2xl"
          />
         
        </div>
      </div>
      <div className="hero">
        <div className="hero-content ">
          <img
            src={samsung}
            className=" rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Discover;
