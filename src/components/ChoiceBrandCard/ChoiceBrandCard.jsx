import { Link } from "react-router-dom";
import computer from "../../assets/images/computer.jpg";
import iphone from "../../assets/images/iphone.jpg";
import jbl from "../../assets/images/jbl.jpg";
import oneplus from "../../assets/images/oneplus.jpg";
import samsung from "../../assets/images/samsung.jpg";
import sony from "../../assets/images/sony.jpg";
const ChoiceBrandCard = () => {
  return (
    <>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={samsung} alt="Shoes" />
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
            <img src={oneplus} alt="Shoes" />
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
            <img src={iphone} alt="Shoes" />
          </figure>
          <div className="flex justify-center items-center hover:bg-gray-100">
            <Link>
              <button className="p-4  text-4xl font-bold">
                iPhone
              </button>
            </Link>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={computer} alt="Shoes" className="h-[330px] w-full"/>
          </figure>
          <div className="flex justify-center items-center hover:bg-gray-100">
            <Link>
              <button className="p-4  text-4xl font-bold">
               HP
              </button>
            </Link>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={jbl} alt="Shoes" className="h-[330px] w-full"/>
          </figure>
          <div className="flex justify-center items-center hover:bg-gray-100">
            <Link>
              <button className="p-4  text-4xl font-bold">
               JBL
              </button>
            </Link>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={sony} alt="Shoes" className="h-[330px]"/>
          </figure>
          <div className="flex justify-center items-center hover:bg-orange-300 rounded-b-xl">
            <Link>
              <button className="p-4  text-4xl font-bold">
              Sony
              </button>
            </Link>
          </div>
        </div>
    </>
  );
};

export default ChoiceBrandCard;
