import { FaCamera, FaGamepad, FaLaptop, FaMobileAlt, FaHeadphones } from "react-icons/fa";
import pre from '../../assets/removebg-preview.png'

const Hover2 = () => {
  return (
    <div className="bg-gray-900 text-white py-10 lg:w-[1250px] md:w-[800px] md:h-[500px]  sm:h-[400px] p-30 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 hover2">
       
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-2">Theme Elements</h2>
          <p className="text-sm mb-4 text-gray-400">Pages that every website needs.</p>
          <div className="flex gap-4">
          <div className="border-1 border-gray-500"></div>
          <ul className="space-y-6">
            <li className="flex items-center gap-2"><FaCamera /> Camera</li>
            <li className="flex items-center gap-2"><FaHeadphones /> Headphone</li>
            <li className="flex items-center gap-2"><FaGamepad /> Gamepad</li>
            <li className="flex items-center gap-2"><FaLaptop /> Laptop</li>
            <li className="flex items-center gap-2"><FaMobileAlt /> Mobile</li>
          </ul> 
          </div>
     
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-bold mb-2">Theme Elements</h2>
          <p className="text-sm mb-4 text-gray-400">Pages that every website needs.</p>
          <div className="flex gap-4">    
          <div className="border-1 border-gray-500"></div>
        <ul className="space-y-6">
            <li>Shop</li>
            <li>Product Details</li>
            <li>Wishlist</li>
            <li>Product Category</li>
            <li>Blog</li>
            <li>Blog Single</li>
          </ul></div>
      
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-bold mb-2">Theme Elements</h2>
          <p className="text-sm mb-4 text-gray-400">Pages that every website needs.</p>
          <div className="flex gap-4">     
            <div className="border-1 border-gray-500"></div>     
            <ul className="space-y-4">
            <li>Product Category V2</li>
            <li>Contact</li>
            <li>Terms and Conditions</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>WooCommerce Placeholder</li>
          </ul></div>

        </div>

        {/* Column 4 */}
        <div className="space-y-6 relative">
          <h2 className="text-xl font-bold mb-2">Theme Elements</h2>
          <p className="text-sm mb-4 text-gray-400">Pages that every website needs.</p>
          <p className="text-sm leading-6 text-gray-400">
            The Apple Watch, with its inbuilt speaker <br />
            and microphone, gives you the freedom <br />
            to call your friends directly from your wrist. <br />
            This splash-resistant.
          </p>

 <img src={pre} alt="" className="absolute lg:top-87 md:-bottom-7 md:left-34 left-34 -bottom-10 rounded-xl"/>

        </div>
      </div>
    </div>
  );
};

export default Hover2;
