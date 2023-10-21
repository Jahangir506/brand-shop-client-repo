import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  const { _id, image, price, category } = product || {};

  return (
    <>
      <div className="card card-compact  mx-auto p-6">
        <figure>
          <img src={image} alt="Shoes" className="w-60 flex-grow" />
        </figure>
        <div className="text-center my-2">
          <p className="">{category}</p>
          <p className="mt-1">Price: {price}</p>
        </div>
        <Link to={`/productList/productDetails/${_id}`}>
          <button className="btn glass w-full bg-black/5">See Details</button>
        </Link>
      </div>
    </>
  );
};

export default ProductCards;
