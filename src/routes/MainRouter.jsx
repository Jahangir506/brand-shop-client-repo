import { createBrowserRouter } from "react-router-dom";
import NewProductAdded from "../components/NewProductAdded/NewProductAdded";
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
                loader: ()=> fetch('https://brand-shop-server-repo.vercel.app/newBrands')
            },
            {
                path: '/newBrands/detailsCard/:brandName',
                element: <Products></Products>,
                loader: () => fetch('https://brand-shop-server-repo.vercel.app/productList')
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
                path: '/productList',
                element: <PrivateRouter><Products></Products></PrivateRouter>,
                loader: () => fetch('https://brand-shop-server-repo.vercel.app/productList')
            },
            {
                path: '/productList/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`https://brand-shop-server-repo.vercel.app/productList/${params.id}`)
            },
            {
                path: '/updateProducts/:id',
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params}) => fetch(`https://brand-shop-server-repo.vercel.app/products/${params.id}`)
            },
            {
                path: '/addedProducts',
                element: <NewProductAdded></NewProductAdded>,
                loader: () =>  fetch('https://brand-shop-server-repo.vercel.app/products')
            }
        ]
    }
])

export default MainRouter;