import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import NewProductShow from "./NewProductShow";

const NewProductAdded = () => {
  const LoadedNewProductsAdded = useLoaderData();
  const [newProductsAdded, setNewProductsAdded] = useState(LoadedNewProductsAdded)

  return (
    <>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8  mt-28 mb-20 pt-10">
        {newProductsAdded.map((newProduct) => (
          <NewProductShow
            key={newProduct._id}
            newProduct={newProduct}
            newProductsAdded={newProductsAdded}
            setNewProductsAdded={setNewProductsAdded}
          ></NewProductShow>
        ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default NewProductAdded;
