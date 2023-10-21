import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const AddProductForm = () => {
  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;

    const addNewProducts = {image, name, brandName,category, price, description};
    console.log(addNewProducts);

    fetch(
      "http://localhost:5007/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addNewProducts),
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
        <div className="max-w-6xl mx-auto py-4">
          <Link to="/">
            <h4 className="font-rancho text-xl flex items-center">
              <BsArrowLeft />
              <span className="ml-1">Back to home</span>
            </h4>
          </Link>
          <div className="  rounded mt-2 mb-20 pb-4">
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
            <div className="max-w-4xl mx-auto  ">
              <form onSubmit={handleAddProducts} className="my-6 ">
                <div className="flex justify-between gap-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text dark:text-white">Image</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="image"
                        placeholder="Enter image url"
                        className="input input-bordered w-full select-warning dark:bg-black/10"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-between gap-6">
                <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text dark:text-white">Name</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered w-full select-warning dark:bg-black/10"
                      />
                    </label>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text dark:text-white">Brand Name</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="brandName"
                        placeholder="Brand name"
                        className="input input-bordered w-full select-warning dark:bg-black/10"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-between gap-6">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text dark:text-white">Category</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        className="input input-bordered w-full select-warning dark:bg-black/10"
                      />
                    </label>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text dark:text-white">Price</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="input input-bordered w-full select-warning dark:bg-black/10"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-between gap-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text dark:text-white">Description</span>
                    </label>
                    <label className="form-group ">
                      <textarea
                        name="description"
                        id=""
                        cols="131"
                        rows="4"
                        className="rounded-lg p-4 textarea textarea-warning dark:bg-black/10"
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
                    className="btn bg-orange-300 hover:bg-orange-200 text-[#331A15] capitalize w-full font-rancho text-xl"
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
