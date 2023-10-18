import { Link } from "react-router-dom";
const ChoiceBrandCard = ({ brand }) => {
  const { brand_name, brand_img } = brand || {};

  return (
    <>
      <Link to='/detailsProducts' className="card card-compact w-80 bg-base-100 shadow-xl hover:scale-75 duration-500">
        <figure>
          <img src={brand_img} alt="Shoes" />
        </figure>
        <div className="flex justify-center items-center">
          <p className="p-4  text-4xl font-bold">{brand_name}</p>
        </div>
      </Link>
    </>
  );
};

export default ChoiceBrandCard;
