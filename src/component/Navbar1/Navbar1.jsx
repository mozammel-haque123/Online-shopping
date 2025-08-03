
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import hot from '../../assets/screenshot.png'
const Navbar1 = () => {
  const buttons = useLoaderData(); // loads navbarbutton1.json

  return (
    <div className="my-10 px-4 mt-20">

    <div className="flex justify-between items-center border-b border-gray-200 mb-2">
    <div>
     <p className="text-2xl font-medium"> Top Categories This Week</p>
     </div>

<div className="flex flex-wrap gap-4 mb-6">
  {buttons.map((btn) => (
    <NavLink
      key={btn.id}
      to={`data/${btn.id}`}
      className={({ isActive }) =>
        "font-bold" +
        (isActive
          ? " text-yellow-400 font-bold"
          : "text-[20px] font-bold text-gray-400")
      }
    >
      {({ isActive }) => (
        <div className="flex flex-col items-center">
          <span>{btn.label}</span>

          {/* always in the DOM, just hidden or shown via opacity+scale */}
          <div
            className={`
              h-8 w-18 mt-1 rounded-full 
              transition-opacity transition-transform duration-300 ease-in-out
              transform
              ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"}
            `}
          >
           <img
                src={hot}
                alt="tip"
                className="w-[100px] h-auto"
              />
          </div>
        </div>
      )}
    </NavLink>
  ))}
</div>


    </div>

 

      <Outlet />
    </div>
  );
};

export default Navbar1;
