import { Outlet } from "react-router-dom";
import Slaider from "../Slaider/Slaider";
import Navbar from "../Navbar/Navbar";
import TopSection from "../TopSection/TopSection";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Fashioncard from "../Fashioncard/Fashioncard";
import Navbar2 from "../Navbar2/Navbar2";
import Navbar3 from "../Navbar3/Navbar3";
import Navbar4 from "../Navbar4/Navbar4";
import Navbar5 from "../Navbar5/Navbar5";
import Navbar6 from "../Navbar6/Navbar6";
import Navbar7 from "../Navbar7/Navbar7";
import Bigcard from "../Bigcard/Bigcard";
import Smallcard from "../Smallcard/Smallcard";


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
        <div className="bg-gray-100 py-[100px]">
        <Navbar2></Navbar2>
        </div>
        <Navbar3></Navbar3>
        <Navbar4></Navbar4>
        <Navbar5></Navbar5>
        <Navbar6></Navbar6>
        <Navbar7></Navbar7>
        <Bigcard></Bigcard>
        <Smallcard></Smallcard>
        </div>    
        </div>

    );
};

export default Mainleyaout;