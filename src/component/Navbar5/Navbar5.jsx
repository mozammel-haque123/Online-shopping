import sani1 from '../../assets/dijain.png';
import sani2 from '../../assets/durjoi.png';
import sani3 from '../../assets/mtiti2.png';
import sani4 from '../../assets/suruj.png';
import five from '../../assets/durjoi.png';
import wone1 from '../../assets/reality1.jpg';
// import two2 from '../../assets/sani4.png';
import sani7 from '../../assets/mtiti2.png';
import sani8 from '../../assets/ltd.jpg';
import maun from '../../assets/phonekl.png'

const categories = [
  'Speaker',
  'Portable',
  'Mobile',
  'Light',
  'Headphone',
  'Google Glass',
  'Drone',
  'Camera',
  '3D Glass',
];

const products = [
  { id: 1, name: 'Summer Casual Cotton', price: '$19.00', image: sani1 },
  { id: 2, name: 'Black Solid Color Full Sleeve', price: '$29.00', image: sani2 },
  { id: 3, name: 'Women Tops Solid Color', price: '$19.00', image: sani3 },
  { id: 4, name: 'Women Tops', price: '$19.00', image: sani4 },
  { id: 5, name: "Men’s Solid Color Short Sleeve", price: '$29.00', image: five },
  { id: 6, name: 'Summer Casual Cotton', price: '$19.00', image: wone1 },
  { id: 7, name: 'Women Tops Solid Color', price: '$19.00', image: sani7 },
  { id: 8, name: 'Women Tops', price: '$19.00', image: sani8 },
];

const Navbar5 = () => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-200 mb-20 md:h-[600px]">
      {/* Sidebar */}
      <div className="relative w-full md:w-1/5">
        <div
        className="relative bg-cover md:w-[300px] h-full p-6"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(0, 112, 243, 0.8),   /* উপরে 80% opacity সহ গাঢ় ব্লু */
        rgba(0, 112, 243, 0.6)    /* নীচে 60% opacity সহ হালকা ব্লু */
      ),
      url(${maun})
    `,
  }}

        >
          <h2 className="text-xl font-bold text-black mb-6 text-center">
            Women Clothing
          </h2>
          <ul className="space-y-4 text-white text-center font-bold">
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-2/5">
        <img src={maun} alt="hero" className="md:w-[400px] w-full h-full" />
      </div>

      {/* Products Grid */}
      <div className="w-full my-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-4 justify-center">
          {products.map((prod) => (
           <div
  key={prod.id}
  className="relative flex flex-col items-center group overflow-hidden"
>
  <img
    src={prod.image}
    alt={prod.name}
    className="h-30 w-30 mb-2 transition duration-300 ease-in-out"
  />

  {/* Overlay effect */}
  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-30 transition duration-300 ease-in-out pointer-events-none"></div>

  <p className="text-gray-700 font-semibold text-center">{prod.name}</p>
  <p className="text-blue-600 text-sm font-semibold mt-1">{prod.price}</p>
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar5;
