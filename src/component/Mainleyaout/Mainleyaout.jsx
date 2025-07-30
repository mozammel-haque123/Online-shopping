import { Outlet } from "react-router-dom";
import Slaider from "../Slaider/Slaider";
import Navbar from "../Navbar/Navbar";
import TopSection from "../TopSection/TopSection";

const Mainleyaout = () => {
    return (
        <div>
        <TopSection></TopSection>
        <div className="w-11/12 mx-auto border">
        <Navbar></Navbar>
        <Slaider></Slaider>
        <Outlet></Outlet>
        </div>    
        </div>

    );
};

export default Mainleyaout;