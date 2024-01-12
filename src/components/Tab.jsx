import React from "react";

const Tab = ({ children, buttons, ButtonsContainer = "menu" }) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tab;
