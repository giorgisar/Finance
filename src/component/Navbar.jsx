import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="company" smooth={true} duration={500}>
            Company
          </Link>
        </li>
        <li className="p-4">
          <Link to="resources" smooth={true} duration={500}>
            Resources
          </Link>
        </li>
        <li className="p-4">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4  border-b border-gray-600">
            <Link onClick={handleNav} to="hero" smooth={true} duration={500}>
              home
            </Link>
          </li>
          <li className="p-4  border-b border-gray-600">
            <Link onClick={handleNav} to="company" smooth={true} duration={500}>
              Company
            </Link>
          </li>
          <li className="p-4  border-b border-gray-600">
            <Link
              onClick={handleNav}
              to="resources"
              smooth={true}
              duration={500}
            >
              Resources
            </Link>
          </li>
          <li className="p-4  border-b border-gray-600">
            <Link onClick={handleNav} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="p-4 ">
            <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
