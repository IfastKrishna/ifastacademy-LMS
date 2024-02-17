import React, { useState } from "react";
import { Button, Input, Sppiner, Textarea } from "../../components/index.js";

function Dev() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div className="w-full px-8">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <Input label="Name" />
        </div>
        <div className="mb-4">
          <Input label="Email" type="email" />
        </div>
        {/* Conditionally render spinner while form is submitting */}
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
}

export default Dev;
