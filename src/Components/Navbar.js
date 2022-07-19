import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <Link to={"/"} style={style.link}>
            Is Triangle?
          </Link>
          <Link to={"/quiz"} style={style.link}>
            Quiz
          </Link>
          <Link to={"/hypotenuse"} style={style.link}>
            Hypotenuse
          </Link>
          <Link to={"/area"} style={style.link}>
            Area
          </Link>
        </ul>
      </nav>
    </>
  );
}

const style = {
  link: {
    color: "white",
    textDecoration: "none",
    padding: '0 1rem',
    fontSize: '1.4rem',
    fontWeight: 'bold'
  },
};
export default Navbar;
