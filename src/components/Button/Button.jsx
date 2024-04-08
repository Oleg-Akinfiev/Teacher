import React from "react";

const Button = () => {
  const handleClick = () => {};

  return (
    <div className="btn">
      <button type="button" onClick={handleClick} className="btn__text">
        Связаться с учителем
      </button>
    </div>
  );
};

export default Button;
