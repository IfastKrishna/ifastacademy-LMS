import React from "react";

function Button({ children, type = "button", className, ...props }) {
  return (
    <button
      type={type}
      className={`py-2 px-8 uppercase bg-black/10 hover:bg-black/25 hover:border-gray-400 font-medium duration-150 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
