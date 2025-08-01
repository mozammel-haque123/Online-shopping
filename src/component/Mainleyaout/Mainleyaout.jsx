import { Outlet } from "react-router-dom";
import Slaider from "../Slaider/Slaider";
import Navbar from "../Navbar/Navbar";
import TopSection from "../TopSection/TopSection";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Fashioncard from "../Fashioncard/Fashioncard";
import Navbar2 from "../Navbar2/Navbar2";


const Mainleyaout = () => {
    return (
        <div>
        <TopSection></TopSection>
        <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <HeaderSearch></HeaderSearch>
        <Slaider></Slaider>
        <Fashioncard></Fashioncard>
        <Outlet></Outlet>
        <Navbar2></Navbar2>
        </div>    
        </div>

    );
};

export default Mainleyaout;