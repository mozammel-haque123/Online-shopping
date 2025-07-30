import { useEffect, useState } from "react";
import "animate.css/animate.min.css";        // Animate.css ইমপোর্ট
import egypt from "../../assets/egypt.jpg";
import fs from "../../assets/fs.jpg";
import nfs from "../../assets/nfs.jpg";
import logo from "../../assets/logo.png";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import banar from '../../assets/banner.png';
import campaign from '../../assets/campaign.jpg';

// স্লাইড ডেটা
const slides = [
  {
    image: egypt,
    title: "Get 50% Off",
    description: "SHOP WISE WITH PRICE COMPARISONS",
    buttonText1: "VIEW COLLECTION",
    buttonText2: "CATEGORIES",
  },
  {
    image: fs,
    title: "Get 50% Off",
    description: "SHOP WISE WITH PRICE COMPARISONS",
    buttonText1: "VIEW COLLECTION",
    buttonText2: "CATEGORIES",
  },
  {
    image: nfs,
    title: "Get 50% Off",
    description: "SHOP WISE WITH PRICE COMPARISONS",
    buttonText1: "VIEW COLLECTION",
    buttonText2: "CATEGORIES",
  },
];

const Slaider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* ✅ Background image */}
        <div
          key={current}  // remount করে Animate.css ক্লাসগুলো প্রতিবার চালাবে
          className="w-full h-[700px] bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          {/* ✅ Overlay content */}
          <div className="w-full h-full slaidBg relative">
            {/* ✅ Top Bar: Logo & Social Icons */}
            <div className="absolute top-5 left-0 right-0 px-6 flex justify-between items-center z-20">
              {/* Logo */}
              <img src={logo} alt="logo" className="w-36 md:w-48" />

              {/* Social Icons */}
              <div className="flex gap-4 text-white text-xl md:text-2xl">
                <FaTwitter className="hover:text-blue-400 transition" />
                <FaYoutube className="hover:text-red-500 transition" />
                <FaInstagram className="hover:text-pink-500 transition" />
              </div>
            </div>

            {/* ✅ Slide Text Center */}
            <div className="h-full flex flex-col justify-center items-center text-white text-center px-4">
              <h1
                className="
                  text-4xl md:text-6xl font-bold mb-4
                  animate__animated animate__fadeInLeft animate__slower animate__delay-1s
                "
              >
                {slides[current].title}
              </h1>
              <p
                className="
                  text-lg md:text-2xl mb-6 max-w-6xl
                  animate__animated animate__fadeInLeft animate__slower animate__delay-2s
                "
              >
                {slides[current].description}
              </p>
              <div className="flex">
                <button
                  className="
                   py-8 px-10
                   border-2
                   text-blue-700 font-bold
                    btn btn-outline btn-sm md:btn-md border-blue-600 hover:bg-black hover:text-white transition
                    animate__animated animate__fadeInLeft animate__slower animate__delay-3s
                  "
                >
                  {slides[current].buttonText1}
                </button>
                <button
                  className="
                   py-8 px-10
                    btn btn-outline btn-sm md:btn-md bg-amber-500 border-none text-black hover:bg-green-400 hover:text-white transition
                    animate__animated animate__fadeInRight animate__slower animate__delay-4s
                  "
                >
                  {slides[current].buttonText2}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Dots */}
        <div className="absolute bottom-5 lg:left-140 md:left-70 transform -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                idx === current ? "bg-white" : "bg-transparent border border-white"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-14">
          <div className="hover-sweep-container banar-container group relative overflow-hidden">
            <img src={banar} alt="Banner" className="block w-full h-[350px]" />
            <div className="sweep-overlay" />
          </div>

          <div className="hover-sweep-container campaign-container group relative overflow-hidden">
            <img
              src={campaign}
              alt="Banner"
              className="block w-full h-[350px]"
            />
            <div className="sweep-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slaider;
