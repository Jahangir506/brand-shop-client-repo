import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TopSellingProducts = ({ topProduct }) => {
  const {_id, image } = topProduct || {};

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
            <p className="">Realme C51</p>
            <p className="mt-1">
              Price: 8,999 <span className="opacity-75">10,999</span>
            </p>
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
