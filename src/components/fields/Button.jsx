import React from "react";

const Button = ({ type, handleClick, label, name, className }) => {
  return (
    <div>
      <button
        className={className}
        type={type}
        name={name}
        handleClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
