import image1 from '../../assets/images//brands/samsung.jpg'
import image2 from '../../assets/images//brands/sony.jpg'

const Discover = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <img
            src={image1}
            className=" rounded-lg shadow-2xl"
          />
         
        </div>
      </div>
      <div className="hero">
        <div className="hero-content ">
          <img
            src={image2}
            className=" rounded-lg shadow-2xl w-[495px]"
          />
        </div>
      </div>
    </>
  );
};

export default Discover;
