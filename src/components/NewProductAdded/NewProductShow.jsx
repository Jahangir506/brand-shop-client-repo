import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewProductShow = ({ newProduct }) => {
  const { _id, image } = newProduct || {};
  console.log(newProduct);

  const handleProductDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5007/products/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div className="card">
        <figure>
          <img src={image} alt="Movie" className="w-36" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <div className="space-y-3 join join-vertical text-right">
              <Link to={`/updateProducts/${_id}`}>
                <button className="bg-black/5 btn-sm hover:bg-orange-300">
                  <FaEdit className=" text-lg" />
                </button>
              </Link>
              <button
                onClick={() => handleProductDelete(_id)}
                className="bg-black/5 btn-sm hover:bg-orange-300"
              >
                <AiFillDelete className=" text-lg" />
              </button>
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
