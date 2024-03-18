import React from "react";
import "./button.css";

const Button = ({ className, onClick, text }) => {
  return (
    <label>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </label>
  );
};

export default Button;
