import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewProductShow = ({ newProduct }) => {
  const { _id, image } = newProduct || {};
  console.log(newProduct);

  return (
    <>
      <div className="card">
        <figure>
          <img src={image} alt="Movie" className="w-28" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <div className="w-1/4 join join-vertical text-right ">
              <Link to={`/updateProducts/${_id}`} className="space-y-3">
                <button className="bg-black/5 btn-sm hover:bg-orange-300">
                  <FaEdit className=" text-lg" />
                </button>
                <button className="bg-black/5 btn-sm hover:bg-orange-300">
                  <AiFillDelete className=" text-lg" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-16 pt-4">
            <button className="btn glass bg-black/5 btn-sm hover:bg-orange-300 rounded w-full">
              add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProductShow;
