import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <header>
        <h1 id="header">FlatIron Bank</h1>
      <>
        <NavLink to="/">Home</NavLink>
      </>
      <>
      <NavLink to="/transaction">Make Transaction</NavLink>
      </>
      </header>
    </>
  );
};

export default NavBar;
