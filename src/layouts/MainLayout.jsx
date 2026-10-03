import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    const loc = useLocation();

    return (<>
        <p>Pathname is {loc.pathname}</p>
        <Navbar />
        <Outlet />
        <Footer />
    </>)
}

export default MainLayout;