import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
import AddProductForm from "../pages/AddProductForm/AddProductForm";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProducts',
                element: <AddProductForm></AddProductForm>
            }
        ]
    }
])

export default MainRouter;