import ExtraSingCardDetails from './ExtraSingCardDetails';


const ExtraCardDetails = ({ bring }) => {

  console.log(bring);
  return (
    <>
      <div className="grid grid-cols-1 gap-5 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-2">
        {bring?.map(brand => (
          <ExtraSingCardDetails key={brand.id} brand={brand}></ExtraSingCardDetails>
        ))}
      </div>
      {/* <div className="text-center w-full flex mx-auto justify-center">
        {bring?.length === 0 ? (
          <div>
            <p className="text-white font-bold -mt-[50px] text-3xl w-full text-center mx-auto flex justify-center">
              OOPS!!....... <br />
              No Products Available Right Now
            </p>
            <img
              src="https://i.ibb.co/frY869C/output-onlinegiftools-1.gif"
              alt=""
              className="-mt-[70px]"
            />
          </div>
        ) : (
          ''
        )}
      </div> */}
    </>
  );
};

export default ExtraCardDetails;