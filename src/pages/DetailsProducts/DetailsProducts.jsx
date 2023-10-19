import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "./Products";

const DetailsProducts = () => {
  const brandProducts = useLoaderData();
  return (
    <>
      <div className="max-w-7xl mx-auto mt-28">
        <div className="mt-40">
          <Banner></Banner>
        </div>
        <div className="mt-10">
          <h2 className="text-4xl font-semibold text-center">
            Product Collection
          </h2>
          <div className="grid grid-cols-2 gap-y-14 mt-6 mb-20">
            {brandProducts.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DetailsProducts;
