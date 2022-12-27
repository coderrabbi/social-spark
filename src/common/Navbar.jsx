import React, { useState } from "react";

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import styles from "../style";
const navLinks = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Media",
    path: "/media",
    id: 2,
  },
  {
    name: "About",
    path: "/about",
    id: 3,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 4,
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" bg-gray-900 backdrop-blur-3xl navbar px-6 flex justify-between item-center py-6 w-full  ">
      <div className="logo_section">
        <a href="">
          <img src="" alt="hoobank" className="h-[32px]" />
        </a>
      </div>
      <div className="menu_links">
        <ul className={`${styles.flexStart} sm:flex hidden  `}>
          {navLinks.map((item, index) => {
            console.log(index);
            return (
              <li
                key={index}
                className={`text-white list-none font-poppins font-normal cursor-pointer flex-1text-[16px] ${
                  index === navLinks.length - 1 ? `mr-0` : `mr-10`
                }`}
              >
                <a href={`#${item.id}`}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="toggle"
          className="w-[20px] object-contain h-[20px] cursor-pointer"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-5 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex  flex-1 justify-center items-center flex-col">
            {navLinks.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`text-white list-none font-poppins font-normal cursor-pointer flex-1text-[16px] ${
                    index === navLinks.length - 1 ? `mr-0` : `mb-4`
                  }`}
                >
                  <a href={`#${item.id}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
