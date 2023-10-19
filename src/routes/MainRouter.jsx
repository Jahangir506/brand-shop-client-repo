import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
import AddProductForm from "../pages/AddProductForm/AddProductForm";
import DetailsProducts from "../pages/DetailsProducts/DetailsProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
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
                loader: ()=> fetch('http://localhost:5007/brands')
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
                path: '/detailsProducts',
                element: <PrivateRouter><DetailsProducts></DetailsProducts></PrivateRouter>
            }
        ]
    }
])

export default MainRouter;