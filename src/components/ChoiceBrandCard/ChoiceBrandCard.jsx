import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ChoiceBrandCard = ({ brand }) => {
  const { brand_name, brand_img } = brand || {};

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Link
        to="/detailsProducts"
        className="card card-compact w-80 bg-base-100 shadow-xl hover:scale-75 duration-500"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
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
