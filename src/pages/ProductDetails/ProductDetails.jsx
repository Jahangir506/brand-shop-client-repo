import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { _id, image, price, category } = productDetails || {};
  console.log(productDetails);
  return (
    <>
      <div className="mt-28 max-w-7xl mx-auto">
        <div className="hero my-44 border-b border-gray-300 pb-6">
          <div className="hero-content flex-col lg:flex-row gap-20">
            <div className="w-3/4">
              <img src={image} className="w-full rounded-lg shadow-2xl" />
            </div>
            <div className="w-full">
              <div>
                <h1 className="text-5xl font-bold text-center">{category}</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <p>Price: {price}</p>
              </div>
              <div className="flex justify-center gap-16 pt-40">
                <button className="btn glass bg-black/5 btn-sm hover:bg-orange-300 w-1/3 rounded">add to Cart</button>
                <button className="btn glass  bg-black/5 hover:bg-orange-300 btn-sm w-1/3 rounded">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
