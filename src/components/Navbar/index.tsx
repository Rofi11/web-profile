"use client";
import Link from "next/link";
import { FcOpenedFolder } from "react-icons/fc";

function Navbar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.0 dark:bg-black-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-20 transition duration-300 ease-in-out">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          href={"/"}
          passHref
          className="flex items-center mb-1 self-center tracking-[-.10em] max-[360px]:text-[0px] text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold font-mark whitespace-nowrap dark:text-white py-3 "
        >
          <FcOpenedFolder size={30} className="mr-1" />
          Muhammad Rofi
        </Link>

        <ul className="flex flex-row font-medium text-xs text-right mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-500 mb-4 sm:mb-4 md:mb-0 lg:mb=0">
          <Link
            href={"portfolio"}
            // onClick={() => {
            //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            // }}
            className="py-2 px-2 rounded text-gray-700 dark:text-white hover:text-gold-500 dark:hover:text-gold-500 focus:text-gold-500 dark:focus:text-gold-500 font-circular transition duration-300 ease-in-out"
          >
            Projects
          </Link>

          <Link
            href={"/experience"}
            // onClick={() => {
            //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            // }}
            className="py-2 px-2 rounded text-gray-700 dark:text-white hover:text-gold-500 dark:hover:text-gold-500 focus:text-gold-500 dark:focus:text-gold-500 font-circular transition duration-300 ease-in-out"
          >
            Experience
          </Link>

          <Link
            href={"/about"}
            // onClick={() => {
            //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            // }}
            className="py-2 px-2 rounded text-gray-700 dark:text-white hover:text-gold-500 dark:hover:text-gold-500 focus:text-gold-500 dark:focus:text-gold-500 font-circular transition duration-300 ease-in-out"
          >
            About
          </Link>

          <li>
            <label className="rounded-xl inline-flex relative items-center cursor-pointer mt-1.5 ml-2 lg:mt-2 md:mt-2 mr-2">
              <input type="checkbox" value="" className="sr-only peer" />
              {/* <div onClick={handleThemeSwitch} className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-white-500 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-dark-black"></div> */}
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
