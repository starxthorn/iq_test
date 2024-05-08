import { ButtonPropTypes } from "@/types";
import React from "react";

const Button = ({
  text,
  buttonStyles,
  clicked,
  buttonType,
}: ButtonPropTypes) => {
  return (
    <>
      <button
        type={buttonType || "button"}
        onClick={clicked}
        className={buttonStyles}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
