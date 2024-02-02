import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img
          src={logo}
          alt="foto"
          className="w-[154px] h-[62px] object-contain"
          draggable="false"
        />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 font-crimsonn font-normal text-[20px]">
        {/* {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-crimsonn font-normal cursor-pointer text-[20px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-#e2e2e2`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            <link href={`/${nav.id}`}>{nav.title}</link>
          </li>
        ) */}
        {/* )} */}
        <li className="mr-10 text-[#eeeeee]">
          <a href="/">Home</a>
        </li>
        <li className="mr-10 text-[#eeeeee]">
          <a href="/about">About</a>
        </li>
        <li className="mr-10 text-[#eeeeee]">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-crimsonn font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))} */}

            <li className="font-crimsonn text-[16px] text-[#eeeeee]">
              <a href="/">Home</a>
            </li>
            <li className="font-crimsonn text-[16px] text-[#eeeeee]">
              <a href="/about">About</a>
            </li>
            <li className="font-crimsonn text-[16px] text-[#eeeeee]">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
