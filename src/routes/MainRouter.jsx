import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
import AddProductForm from "../pages/AddProductForm/AddProductForm";
import DetailsProducts from "../pages/DetailsProducts/DetailsProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://brand-shop-server-repo-5malzd63u-jahangir506.vercel.app/brands')
            },
            {
                path: '/addProducts',
                element: <AddProductForm></AddProductForm>
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
                path: '/detailsProducts',
                element: <DetailsProducts></DetailsProducts>
            }
        ]
    }
])

export default MainRouter;