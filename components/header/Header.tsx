"use client";

import { useState } from "react";
import NavBar from "./nav-bar";
import Sidebar from "./mobile-menu";

const Header = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    </>
  );
};

export default Header;