import { Link } from "react-router-dom";
import mobileBrand1 from "../../assets/images/mobileBrand1.jpg";
import mobileBrand2 from "../../assets/images/mobileBrand2.jpg";
import mobileBrand3 from "../../assets/images/mobileBrand3.jpg";
const ChoiceBrandCard = () => {
  return (
    <>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={mobileBrand1} alt="Shoes" />
          </figure>
          <div className="flex justify-center items-center hover:bg-gray-100">
            <Link>
              <button className="p-4  text-4xl font-bold">
                Samsung
              </button>
            </Link>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={mobileBrand2} alt="Shoes" />
          </figure>
          <div className="flex justify-center items-center hover:bg-gray-100">
            <Link>
              <button className="p-4  text-4xl font-bold">
               OnePlus
              </button>
            </Link>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={mobileBrand3} alt="Shoes" />
          </figure>
          <div className="flex justify-center items-center hover:bg-gray-100">
            <Link>
              <button className="p-4  text-4xl font-bold">
                iPhone
              </button>
            </Link>
          </div>
        </div>
    </>
  );
};

export default ChoiceBrandCard;
