import React from "react";
import "./styles/index.css";

const ButtonLoader = () => {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="loader lg:w-20 lg:h-20 w-12 h-12 rounded-full"></div>
      </div>
    </>
  );
};

export default ButtonLoader;
