import React from "react";

const TabButton = ({ label, handleClick }) => {
  return (
    <li>
      <button onClick={handleClick}>{label}</button>
    </li>
  );
};

export default TabButton;
