import React, { useState } from "react";
import { Signup } from "../../components/index.js";
import { useForm } from "react-hook-form";

function Dev() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full h-full">
      <Signup />
    </div>
  );
}

export default Dev;
