import React, { useState } from "react";

export const useToggleMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const iconProps = {
    color: "#fff",
    size: 27,
    onClick: () => setToggleMenu(!toggleMenu),
  };

  return { iconProps, toggleMenu };
};

export const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatIsGpt3">What is GTP 3</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#blog">blog</a>
    </p>
  </>
);
