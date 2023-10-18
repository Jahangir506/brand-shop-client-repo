import Marquee from "react-fast-marquee";
import brand1 from '../../assets/images/brand1.jpg';
import brand10 from '../../assets/images/brand10.jpg';
import brand11 from '../../assets/images/brand11.jpg';
import brand12 from '../../assets/images/brand12.jpg';
import brand13 from '../../assets/images/brand13.jpg';
import brand14 from '../../assets/images/brand14.jpg';
import brand15 from '../../assets/images/brand15.jpg';
import brand2 from '../../assets/images/brand2.jpg';
import brand3 from '../../assets/images/brand3.jpg';
import brand4 from '../../assets/images/brand4.jpg';
import brand5 from '../../assets/images/brand5.jpg';
import brand6 from '../../assets/images/brand6.jpg';
import brand7 from '../../assets/images/brand7.jpg';
import brand8 from '../../assets/images/brand8.jpg';
import brand9 from '../../assets/images/brand9.jpg';


const MobileBrand = () => {
  return (
    <>
      <Marquee>
                <div className="flex justify-center items-center gap-16 my-8">
                    <img src={brand1} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand2} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand3} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand4} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand5} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand6} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand7} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand8} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand9} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand10} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand11} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand12} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand13} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand14} alt="" className="w-32 bg-white p-3 rounded-full"/>
                    <img src={brand15} alt="" className="w-32 bg-white p-3 rounded-full mr-16"/>
                </div>
      </Marquee>
    </>
  );
};

export default MobileBrand;
