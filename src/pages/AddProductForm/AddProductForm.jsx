import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const AddProductForm = () => {
  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.supplier.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, details, photo };
    console.log(newCoffee);

    fetch(
      "https://coffee-master-projects-bd2023-server-hcdcf6bwh-jahangir506.vercel.app/coffee",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Products Added Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <>
      <div className="mt-28 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto mt-32">
            <Link to="/">
              <h4 className="font-rancho text-xl flex items-center">
                <BsArrowLeft/>
                 <span className="ml-1">Back to home</span>
                </h4>
            </Link>
          <div className="bg-slate-200 rounded mt-2 mb-20 pb-4">
            <div className="text-center">
              <h1 className="text-4xl font-semibold font-rancho">
                Add New Products
              </h1>
              <p className="max-w-2xl mx-auto my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                reiciendis excepturi cum ducimus at id praesentium commodi
                delectus quod, fuga qui consectetur fugiat perferendis?
                Perferendis possimus corrupti quos blanditiis pariatur?
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleAddProducts} className="my-6">
                <div className="flex justify-between gap-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="image"
                        placeholder="Enter image url"
                        className="input input-bordered w-full select-warning"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-between gap-6">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered w-full select-warning"
                      />
                    </label>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="brand"
                        placeholder="brand name"
                        className="input input-bordered select-warning w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-between gap-6">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <select className="select select-warning w-full">
                      <option  selected>
                        Phones
                      </option>
                      <option>Tablets</option>
                      <option>Laptop</option>
                      <option>Headphones</option>
                      <option>Smart Watches</option>
                      <option>Chargers</option>
                    </select>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="price"
                        placeholder="price"
                        className="input input-bordered w-full select-warning"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-between gap-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <label className="form-group ">
                      <textarea
                        name="description"
                        id=""
                        cols="131"
                        rows="5"
                        className="rounded-lg p-4 textarea textarea-warning"
                      ></textarea>
                    </label>
                  </div>
                </div>
                <div className="flex gap-2 my-2 items-center w-1/2">
                  <span>Rating</span>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <div className="my-5">
                  <input
                    type="submit"
                    value="Add Products"
                    className="btn bg-[#D2B48C] hover:bg-[#f6d9b3] text-[#331A15] capitalize w-full font-rancho text-xl"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddProductForm;
