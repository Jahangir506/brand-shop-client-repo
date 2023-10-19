import { Link } from "react-router-dom";
import samsung from "../../assets/images/brands/samsung.jpg";

const TopSellingProducts = () => {
  return (
    <>
      <div className="card card-compact w-52">
        <figure>
          <img src={samsung} alt="Shoes" />
        </figure>
        <div className="text-center my-3">
          <p className="">Realme C51</p>
          <p className="mt-1">
            Price: 8,999 <span className="opacity-75">10,999</span>
          </p>
        </div>
      </div>
      <div className="card card-compact w-52 bg-base-100 shadow-xl">
        <figure>
          <img src={samsung} alt="Shoes" />
        </figure>
        <div className="flex justify-center items-center hover:bg-gray-100">
          <Link>
            <button className="p-4  text-4xl font-bold">Samsung</button>
          </Link>
        </div>
      </div>
      <div className="card card-compact w-52 bg-base-100 shadow-xl">
        <figure>
          <img src={samsung} alt="Shoes" />
        </figure>
        <div className="flex justify-center items-center hover:bg-gray-100">
          <Link>
            <button className="p-4  text-4xl font-bold">Samsung</button>
          </Link>
        </div>
      </div>
      <div className="card card-compact w-52 bg-base-100 shadow-xl">
        <figure>
          <img src={samsung} alt="Shoes" />
        </figure>
        <div className="flex justify-center items-center hover:bg-gray-100">
          <Link>
            <button className="p-4  text-4xl font-bold">Samsung</button>
          </Link>
        </div>
      </div>
      <div className="card card-compact w-52 bg-base-100 shadow-xl">
        <figure>
          <img src={samsung} alt="Shoes" />
        </figure>
        <div className="flex justify-center items-center hover:bg-gray-100">
          <Link>
            <button className="p-4  text-4xl font-bold">Samsung</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopSellingProducts;
