import React from "react";

function Menu({ children, className }) {
  return (
    <li
      className={`w-full py-2 px-4 hover:bg-black/10 rounded duration-200 ${className}`}
    >
      <a href="#" className="flex items-center text-xl">
        {children}
      </a>
    </li>
  );
}

export default Menu;
