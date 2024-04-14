import { useState } from "react";
import { navLinks } from "../constants";
import {
  close,
  menu,
  facebook,
  whatsapp,
  youtube,
  emailicon,
} from "../assets/index";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="scroll-smooth">
      <nav className="flex flex-wrap py-4 lg:px-6 md:py-3 px-3 justify-between items-center bg-black fixed z-50  top-0 navbar w-full">
        <div className="logo lg:hidden">B</div>

        <ul className="list-none md:flex md:flex-row hidden justify-start items-center px-8">
          <div className="lg:rounded-2xl lg:font-bold font-roboto mr-12 lg:bg-red-500 text-center text-3xl lg:text-white w-10 hover:cursor-pointer">
            B
          </div>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-roboto  font-normal cursor-pointer text-[16px] text-white hover:border-b-4 border-red-500 transition-all duration-3000 ease-in-out  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-gray-600 `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:flex  hidden flex-row  gap-6 justify-normal mr-12 ">
          <img
            src={facebook}
            alt="facebook"
            className=" w-6 h-6 cursor-pointer hover:border-b-4 border-red-500 transition-all duration-3000 ease-in-out"
          />
          <img
            src={whatsapp}
            alt="whatsapp"
            className=" w-6 h-6 cursor-pointer hover:border-b-4 border-red-500 transition-all duration-3000 ease-in-out"
          />
          <img
            src={youtube}
            alt="youtube"
            className=" w-6 h-6 cursor-pointer hover:border-b-4 border-red-500 transition-all duration-3000 ease-in-out "
          />
          <img
            src={emailicon}
            alt="emailicon"
            className="w-6 h-6 cursor-pointer hover:border-b-4 border-red-500 transition-all duration-3000 ease-in-out"
          />
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center px-4 ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-2 md:mr-6 cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-white absolute top-[40px] left-0 z-10 mx- my-2 w-full sidebar mt-5`}
          >
            <ul className="list-none flex flex-col justify-end items-start flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-normal text-gray-700 px-2.5 cursor-pointer pt-2 text-[16px] hover:cursor-pointer hover:border-b-2 border-red-700 transition-all duration-3000 ease-in-out  ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-gray-700`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
