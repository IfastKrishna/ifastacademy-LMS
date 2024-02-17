import React, { useState } from "react";
import { Button, Login, Signup } from "../../components/index.js";
import toast from "react-hot-toast";

function Dev() {
  const notify = () =>
    toast.success("Register is successfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  return (
    <div className="w-full h-full">
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default Dev;
