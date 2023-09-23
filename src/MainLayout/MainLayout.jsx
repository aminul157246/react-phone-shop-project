import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    // location 
const loc = useLocation()
console.log(loc);

useEffect(()=> {
    console.log(loc.pathname);
    if(loc.pathname === "/"){
        document.title = `Phone_home`
    }
    else {
        document.title = `Phone ${loc.pathname.replace("/", "_")}`
    }

    if(loc.state){
        document.title = `${loc.state}`
    }
},[loc.pathname, loc.state])





    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;