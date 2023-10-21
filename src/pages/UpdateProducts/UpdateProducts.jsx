import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const UpdateProducts = () => {
  const productDetails = useLoaderData();
  const { _id, name, image, price, category, brandName, description } = productDetails || {};

  const handleUpdateProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;

    const updateProducts = {image, brandName, category, price, description};


    fetch(
      `https://brand-shop-server-repo.vercel.app/productsproducts/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProducts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "success!",
            text: "Products updated successfully",
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
            <h4 className="font-rancho text-lg flex items-center">
              <BsArrowLeft />
              <span className="ml-1">Back to home</span>
            </h4>
          </Link>
          <div className="rounded mt-2 mb-20 pb-4">
            <div className="text-center">
              <h1 className="text-4xl font-semibold font-rancho">
                Update Products
              </h1>
              <p className="max-w-2xl mx-auto my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                reiciendis excepturi cum ducimus at id praesentium commodi
                delectus quod, fuga qui consectetur fugiat perferendis?
                Perferendis possimus corrupti quos blanditiis pariatur?
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleUpdateProducts} className="my-6">
                <div className="flex justify-between gap-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text dark:text-white">Image</span>
                    </label>
                    <label className="form-group">
                      <input
                        type="text"
                        name="image"
                        defaultValue={image}
                        placeholder="Enter image url"
                        className="dark:bg-black/10 input input-bordered w-full select-warning"
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
                        defaultValue={name}
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
                        defaultValue={brandName}
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
                        defaultValue={category}
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
                        defaultValue={price}
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
                        defaultValue={description}
                        id=""
                        cols="131"
                        rows="4"
                        className="dark:bg-black/10 rounded-lg p-4 textarea textarea-warning"
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
                    value="Update"
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

export default UpdateProducts;
