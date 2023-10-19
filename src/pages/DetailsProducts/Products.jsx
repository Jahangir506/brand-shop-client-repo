import { FaEdit } from "react-icons/fa";

const Products = ({product}) => {
    const {image, price, category} = product || {};
    console.log(product);
  return (
    <>
      <div className="card card-compact mx-auto relative p-5">
        <figure>
          <img src={image} alt="Shoes" className="w-60 flex-grow"/>
        </figure>
        <div className="text-center my-2">
          <p className="">{category}</p>
          <p className="mt-1">
            Price: {price}
          </p>
        </div>
        <button className="btn glass bg-black/5">See Details</button>
        <button className="absolute top-1 right-1"><FaEdit/></button>
      </div>
    </>
  );
};

export default Products;
