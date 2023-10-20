import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../Footer/Footer";
import ProductCards from "./ProductCards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const allProduct = useLoaderData();
  console.log(allProduct);
  const { brandName } = useParams();

  useEffect(() => {
    const product = allProduct?.filter(bring => bring?.brandName === brandName);
    setProducts(product);
  }, [brandName, allProduct]);

  console.log(products);

  return (
    <>
      <div className="max-w-7xl dark:text-white mx-auto mt-28">
        <div className="mt-40">
          <Banner></Banner>
        </div>
        <div className="mt-10">
          <h2 className="text-4xl font-semibold text-center">
            Product Collection
          </h2>
          <div className="grid grid-cols-2 gap-y-14 mt-16 mb-20">
            {products.map((product) => (
              <ProductCards key={product._id} product={product}></ProductCards>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
