import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    const btn = document.getElementById("menu-btn");
    btn?.classList.toggle("open");
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
      <span className="font-bold">Cube-Mosaic Icons Production Studio</span>

      <span className="space-x-10 m-0 p-0">
        <button
          id="menu-btn"
          className="block hamburger focus:outline-none"
          onClick={() => toggleMenu()}
        >
          <span className="hamburger-top mt-4"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {menuIsOpen && (
          <div className="absolute flex flex-col self-end py-2 mt-2 pl-2 space-y-2 font-bold sm:w-auto sm:self-center right-2 drop-shadow-md text-white bg-gray-500 bg-opacity-50 text-right">
            <Link to="/" className="mr-2 hover:text-brightRed">
              Icons
            </Link>
            <Link to="/about" className="mr-2 hover:text-brightRed">
              About
            </Link>
          </div>
        )}
      </span>
    </nav>
  );
}
