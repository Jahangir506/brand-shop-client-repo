import { Link } from "react-router-dom";
import mobileBrand1 from "../../assets/images/mobileBrand1.jpg";
import mobileBrand2 from "../../assets/images/mobileBrand2.jpg";

const Discover = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <img
            src={mobileBrand1}
            className=" rounded-lg shadow-2xl"
          />
         
        </div>
      </div>
      <div className="hero">
        <div className="hero-content ">
          <img
            src={mobileBrand1}
            className=" rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Discover;
