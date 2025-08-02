import jare from '../../assets/larn.jpg'
import tora from '../../assets/tora.jpg'
import mane from '../../assets/manena.png'
import aha from '../../assets/ahare.jpg'
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import big from '../../assets/gadgetfeature.jpg';

const Bigcard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center  mb-20">
      <div
        className="md:w-full bg-no-repeat bg-cover bg-center md:h-[700px]"
        style={{
          backgroundImage: `url(${big})`,
        }}
      >
           <div className='flex justify-between mt-10 mb-10'>
    <h1 className='text-2xl font-semibold'>Gadget Makes Your Life Easy</h1>
     <button className="relative overflow-hidden px-6 py-3 bg-yellow-300 text-white group flex items-center justify-center rounded-2xl md:mr-[300px]">
      <span className="relative z-10">
      </span>
      <span
        className="
          absolute inset-0 
          bg-green-500 
          transform translate-x-full origin-right 
          group-hover:translate-x-0 
          transition-transform duration-300
          rounded-l-xl
        "
      />
      view collections
    </button>
         </div>






{/* card-1 */}

    <div className="w-full pr-0 md:pr-[200px] lg:pr-[300px]">
      {/* 1-column on small, 2-columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        
        {/* card-1 */}
        <div className="group relative w-full h-[235px] bg-white rounded-xl shadow-lg overflow-hidden flex p-4">
          {/* IMAGE */}
          <div className="relative w-1/3 h-full overflow-hidden rounded-xl flex-shrink-0">
            <img
              src={jare}
              alt="Product"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20" />
          </div>
          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-between p-4 relative">
            <button className="absolute top-4 right-4 text-yellow-400 hover:text-red-500 transition">
              <AiOutlineHeart size={20} />
            </button>
            <div className="flex items-center text-yellow-400">
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">Xpeed Laptop</h3>
              <p className="mt-1">
                <span className="line-through text-gray-400">$640.00</span>
                <span className="ml-2 text-blue-600 font-bold">$540.00</span>
              </p>
            </div>
       <button className="relative overflow-hidden px-14 py-2 bg-blue-700 text-white flex items-center justify-center rounded-2xl hover:bg-emerald-400 transition-colors duration-300 mt-4">
  <span className="relative z-10">Read more</span>

  <span
    className="
      absolute inset-0 
      bg-green-500 
      transform translate-x-full origin-right 
      hover:translate-x-0 
      transition-transform duration-300
      rounded-l-xl
    "
  />
</button>

          </div>
        </div>

        {/* card-2 */}
        <div className="group relative w-full h-[235px] bg-white rounded-xl shadow-lg overflow-hidden flex p-4">
          <div className="relative w-1/3 h-full overflow-hidden rounded-xl flex-shrink-0">
            <img
              src={tora}
              alt="Product"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20" />
          </div>
          <div className="flex-1 flex flex-col justify-between p-4 relative">
            <button className="absolute top-4 right-4 text-yellow-400 hover:text-red-500 transition">
              <AiOutlineHeart size={20} />
            </button>
            <div className="flex items-center text-yellow-400">
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">Xpeed Laptop</h3>
              <p className="mt-1">
                <span className="line-through text-gray-400">$640.00</span>
                <span className="ml-2 text-blue-600 font-bold">$540.00</span>
              </p>
            </div>
                <button className="relative overflow-hidden px-14 py-2 bg-blue-700 text-white flex items-center justify-center rounded-2xl hover:bg-emerald-400 transition-colors duration-300 mt-4">
  <span className="relative z-10">Read more</span>

  <span
    className="
      absolute inset-0 
      bg-green-500 
      transform translate-x-full origin-right 
      hover:translate-x-0 
      transition-transform duration-300
      rounded-l-xl
    "
  />
</button>
          </div>
        </div>

        {/* card-3 */}
        <div className="group relative w-full h-[235px] bg-white rounded-xl shadow-lg overflow-hidden flex p-4">
          <div className="relative w-1/3 h-full overflow-hidden rounded-xl flex-shrink-0">
            <img
              src={mane}
              alt="Product"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20" />
          </div>
          <div className="flex-1 flex flex-col justify-between p-4 relative">
            <button className="absolute top-4 right-4 text-yellow-400 hover:text-red-500 transition">
              <AiOutlineHeart size={20} />
            </button>
            <div className="flex items-center text-yellow-400">
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">Xpeed Laptop</h3>
              <p className="mt-1">
                <span className="line-through text-gray-400">$640.00</span>
                <span className="ml-2 text-blue-600 font-bold">$540.00</span>
              </p>
            </div>
                <button className="relative overflow-hidden px-14 py-2 bg-blue-700 text-white flex items-center justify-center rounded-2xl hover:bg-emerald-400 transition-colors duration-300 mt-4">
  <span className="relative z-10">Read more</span>

  <span
    className="
      absolute inset-0 
      bg-green-500 
      transform translate-x-full origin-right 
      hover:translate-x-0 
      transition-transform duration-300
      rounded-l-xl
    "
  />
</button>
          </div>
        </div>

        {/* card-4 */}
        <div className="group relative w-full h-[235px] bg-white rounded-xl shadow-lg overflow-hidden flex p-4">
          <div className="relative w-1/3 h-full overflow-hidden rounded-xl flex-shrink-0">
            <img
              src={aha}
              alt="Product"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20" />
          </div>
          <div className="flex-1 flex flex-col justify-between p-4 relative">
            <button className="absolute top-4 right-4 text-yellow-400 hover:text-red-500 transition">
              <AiOutlineHeart size={20} />
            </button>
            <div className="flex items-center text-yellow-400">
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">Xpeed Laptop</h3>
              <p className="mt-1">
                <span className="line-through text-gray-400">$640.00</span>
                <span className="ml-2 text-blue-600 font-bold">$540.00</span>
              </p>
            </div>
               <button className="relative overflow-hidden px-14 py-2 bg-blue-700 text-white flex items-center justify-center rounded-2xl hover:bg-emerald-400 transition-colors duration-300 mt-4">
  <span className="relative z-10">Read more</span>

  <span
    className="
      absolute inset-0 
      bg-green-500 
      transform translate-x-full origin-right 
      hover:translate-x-0 
      transition-transform duration-300
      rounded-l-xl
    "
  />
</button>
          </div>
        </div>
        
      </div>
    </div>









      </div>

    </div>
  );
};

export default Bigcard;
