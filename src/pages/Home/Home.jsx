import Banner from "../../components/Banner/Banner";
import ChoiceBrandCard from "../../components/ChoiceBrandCard/ChoiceBrandCard";
import Discover from "../../components/Discover/Discover";
import MobileBrand from "../../components/MobileBrand/MobileBrand";
import TopSellingProducts from "../../components/TopSellingProducts/TopSellingProducts";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <MobileBrand></MobileBrand>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-y-16 justify-items-center mb-20">
        <ChoiceBrandCard></ChoiceBrandCard>
      </div>
      <div>
        <h1 className="text-center text-4xl font-medium">Top Selling Products</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8 justify-items-center mt-10 mb-20">
          <TopSellingProducts></TopSellingProducts>
          <TopSellingProducts></TopSellingProducts>
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
