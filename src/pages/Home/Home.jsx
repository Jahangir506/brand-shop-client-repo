import Banner from "../../components/Banner/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto h-[500px]">
        <h2 className="text-center"> This is Home page</h2>
      </div>
      <div className="fixed bottom-0 w-full z-50 shadow-md">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
