import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
import AddProductForm from "../pages/AddProductForm/AddProductForm";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import UpdateProducts from "../pages/UpdateProducts/UpdateProducts";
import PrivateRouter from "./PrivateRouter";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5007/newBrands')
            },
            {
                path: '/newBrands/detailsCard/:brandName',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5007/productList')
            },
            {
                path: '/addProducts',
                element: <PrivateRouter><AddProductForm></AddProductForm></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products',
                element: <PrivateRouter><Products></Products></PrivateRouter>,
                loader: () => fetch('http://localhost:5007/products')
            },
            {
                path: '/products/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5007/products/${params.id}`)
            },
            {
                path: '/updateProducts/:id',
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params}) => fetch(`http://localhost:5007/products/${params.id}`)
            }
        ]
    }
])

export default MainRouter;