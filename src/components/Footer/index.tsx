import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="flex flex-col items-center text-gray-700 text-xs dark:text-white text-left pt-36 pb-10 transition duration-300 ease-in-out mt-[100px]">
      <p className="text-gray-500 dark:text-whity font-circular">
        All rights reserved to
      </p>
      <a
        className="text-gray-400 font-circular dark:text-gray-500"
        href="https://github.com/Rofi11"
      >
        Muhammad Rofi - {year}
      </a>
    </div>
  );
}

export default Footer;
