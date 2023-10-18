import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
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
            }
        ]
    }
])

export default MainRouter;