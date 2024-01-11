import React from "react";

const TabButton = ({ label, handleClick, isSelected }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={handleClick}
      >
        {label}
      </button>
    </li>
  );
};

export default TabButton;
