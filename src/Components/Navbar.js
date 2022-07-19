import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <Link to={"/"} className="link">
            Is Triangle?
          </Link>
          <Link to={"/quiz"} className="link">
            Quiz
          </Link>
          <Link to={"/hypotenuse"} className="link">
            Hypotenuse
          </Link>
          <Link to={"/area"} className="link">
            Area
          </Link>
        </ul>
      </nav>
    </>
  );
}

 
export default Navbar;
