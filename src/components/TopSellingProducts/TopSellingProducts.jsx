import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TopSellingProducts = ({ topProduct }) => {
  const {_id, image, productName, price, rating } = topProduct || {};

  return (
    <>
      <Link to={`/productList/productDetails/${_id}`}>
        <div
          className="card card-compact w-52"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="text-center my-3">
            <p className="">{productName}</p>
            <p className="mt-1">
              {price}
            </p>
            <p>{rating}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

TopSellingProducts.propTypes = {
  topProduct: PropTypes.object
}

export default TopSellingProducts;
