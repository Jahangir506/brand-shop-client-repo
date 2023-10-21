import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ChoiceBrandCard from "../../components/ChoiceBrandCard/ChoiceBrandCard";
import Discover from "../../components/Discover/Discover";
import MobileBrand from "../../components/MobileBrand/MobileBrand";
import TopSellingProducts from "../../components/TopSellingProducts/TopSellingProducts";
import Footer from "../Footer/Footer";

const Home = () => {
  const [topProducts, setTopProducts] = useState([]);
  const newBrands = useLoaderData();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("https://brand-shop-server-repo.vercel.app/productsproductList")
      .then((res) => res.json())
      .then((data) => {
        setTopProducts(data);
      });
  }, []);

  return (
    <>
      <Banner></Banner>
      <MobileBrand></MobileBrand>
      <div
        className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 justify-items-center mb-20"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {newBrands.map((brand) => (
          <ChoiceBrandCard
            key={brand._id}
            brand={brand}
            data-aos="zoom-in-down"
          ></ChoiceBrandCard>
        ))}
      </div>
      <div>
        <h1 className="text-center text-4xl font-medium">
          Top Selling Products
        </h1>
        <div
          className="max-w-7xl mx-auto grid md:grid-cols-2  lg:grid-cols-4 gap-8 justify-items-center my-20"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {topProducts.slice(0, 8).map((topProduct) => (
            <TopSellingProducts
              key={topProduct._id}
              topProduct={topProduct}
            ></TopSellingProducts>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-medium">Discover</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 justify-items-center mt-10 mb-20">
          <Discover></Discover>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;

// footer className="fixed bottom-0 w-full z-50 shadow-md"
