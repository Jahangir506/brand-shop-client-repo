import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ChoiceBrandCard = ({ brand }) => {
  const { brandName, image} = brand || {};

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Link
        to={`/newBrands/detailsCard/${brandName}`}
        className="card card-compact w-80 bg-base-100 mt-10 dark:bg-black shadow-xl hover:scale-75 duration-500"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="flex justify-center items-center">
          <p className="p-4  text-4xl font-bold">{brandName}</p>
        </div>
      </Link>
    </>
  );
};

export default ChoiceBrandCard;
