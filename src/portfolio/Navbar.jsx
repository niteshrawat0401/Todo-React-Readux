import React from "react";
import Home from "./Home";
import { Link, navigate, useNavigate } from "react-router-dom";
import  "./style.css"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="nav">
      <div>
        <Link to="/">Home</Link>
      </div>

      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        {/* <Link to="/button">Click here</Link> */}
        <button onClick={() => navigate("/click")}>Click here</button>
      </div>
      </div>
    </>
  );
};

export default Navbar;
