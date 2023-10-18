import Banner from "../../components/Banner/Banner";
import ChoiceBrandCard from "../../components/ChoiceBrandCard/ChoiceBrandCard";
import MobileBrand from "../../components/MobileBrand/MobileBrand";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <MobileBrand></MobileBrand>
      <div className="max-w-7xl mx-auto h-[500px]">
        <ChoiceBrandCard></ChoiceBrandCard>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;

// footer className="fixed bottom-0 w-full z-50 shadow-md"