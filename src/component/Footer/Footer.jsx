import Skrill from '../../assets/skril.png'
import Amex from '../../assets/american.png'
import Paypal from '../../assets/palypal.png'
import Norton from '../../assets/norton.png'
import McAfee from '../../assets/mcAfee.png'
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import { FaArrowUpLong } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="bg-white text-gray-700 text-sm relative ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h1 className="text-3xl font-bold mb-8">
            Marketo<span className="text-blue-600">.</span>
          </h1>
          <p className="text-gray-500 mb-2 text-2xl">
            Got Question? Call us <br /> 24/7
          </p>
          <p className="text-2xl font-semibold mb-2">
            <span>[80]</span> 1017 197
          </p>
          <p className="mb-4 text-gray-500">
            17 Princess Road, London, Greater<br />
            London NW1 8JR, UK
          </p>
          <button className="flex gap-2 items-center bg-yellow-400 hover:bg-emerald-500 text-white px-4 py-4 rounded font-medium transition-colors duration-300 ease-in-out">
  <CiLocationOn className="text-xl" /> View On Map
</button>

        </div>

        {/* Payment Security */}
        <div>
          <h2 className="text-gray-500 mb-2 text-3xl">We Using</h2>
          <h3 className="text-2xl font-semibold mb-3">Safe Payments</h3>
          <div className="flex space-x-3 my-10 opacity-60">
            <img src={Skrill} alt="Skrill" />
            <img src={Paypal} alt="Paypal" />
            <img src={Amex} alt="Amex" />
          </div>
          <p className="text-sm my-6 font-semibold">Secured by:</p>
          <div className="flex items-center space-x-3">
            <img src={Norton} className="h-8" alt="Norton" />
            <img src={McAfee} className="h-8" alt="McAfee" />
          </div>
        </div>

        {/* Our Stores */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Stores</h3>
          <ul className="space-y-3 text-gray-600 text-[15px]">
            <li>New York</li>
            <li>London SF</li>
            <li>Cockfosters BP</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>Las Vegas</li>
            <li>Albarto</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-3 text-gray-600 text-[15px]">
            <li>Support Center</li>
            <li>Term & Conditions</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Products Return</li>
            <li>FAQS</li>
          </ul>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className=" md:flex absolute bottom-60 right-0 md:right-4 md:top-1/2 transform -translate-y-1/2 w-14 h-56 bg-yellow-400 rounded-lg flex-col items-center justify-center transition duration-300 group overflow-hidden gap-3"
      >
        {/* Overlay div */}
        <div
          className="absolute inset-0 bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none rounded-b-lg"
        ></div>

        {/* Button content */}
        <FaArrowUpLong className="text-white text-2xl  mb-4 z-10 mx-auto" />
        <span
          className="text-white text-xs font-semibold relative z-10"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          BACK TOP
        </span>
      </button>

      {/* Bottom Section */}
      <div className="bg-yellow-400 py-8 text-black flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
        <p className="text-sm">
          &copy; 2021 <span className="font-semibold">XpeedStudio</span> All Rights Reserved
        </p>
        <div className="flex items-center gap-4 text-lg">
          <p className='flex items-center gap-1'><FaFacebook /> Facebook</p>
          <p className='flex items-center gap-1'><FaTwitter /> Twitter</p>
          <p className='flex items-center gap-1'><FaPinterest /> Pinterest</p>
          <p className='flex items-center gap-1'><FaInstagram /> Instragram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
