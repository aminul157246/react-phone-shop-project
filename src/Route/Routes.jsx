
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Favorites from "../Pages/Home/Favourite/Favorites";
import Login from "../Pages/Home/LogIn/Login";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
    const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('phones.json')
            },
            {
                path : '/favorite',
                element : <Favorites></Favorites>,
            },
            {
                path : '/phones/:id',
                element : <PhoneDetails></PhoneDetails>,
                loader : () => fetch('/phones.json')

            },
            {
                path : '/login',
                element : <Login></Login>,
            },
        ]
    },
]);
export default router;