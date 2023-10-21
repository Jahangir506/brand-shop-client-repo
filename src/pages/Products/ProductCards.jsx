import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  const { _id, image, price, productName, description, rating } = product || {};

  return (
    <>
      <div className="card card-compact mx-auto p-6">
        <figure>
          <img src={image} alt="Shoes" className="w-60 flex-grow" />
        </figure>
        <div className="p-3 my-2">
          <h2 className="card-title">{productName}</h2>
          <p className="mt-1"><span className="text-lg font-medium">description:</span> {description}</p>
          <p className="mt-1"><span className="text-lg font-medium">Price:</span> {price}</p>
          <p>{rating}</p>
        </div>
        <Link to={`/productList/productDetails/${_id}`}>
          <button className="btn glass w-full bg-black/5 hover:bg-orange-300">See Details</button>
        </Link>
      </div>
    </>
  );
};

ProductCards.propTypes = {
  product: PropTypes.object
}

export default ProductCards;
