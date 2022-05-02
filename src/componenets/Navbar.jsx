import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: "auto",
        padding: "30px",
        background: "yellow",
        color: "blue",
        fontSize: "30px",
        display: "flex",
        gap: "20px",
      }}
    >
      <div>
        <Link to="/home">Home</Link>
      </div>

      <div>
        <Link to="/about">About</Link>
      </div>

      <div>
        {/* <Link to="/Login">Login</Link> */}
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <div>
        <Link to="/counter">Counter</Link>
      </div>

      <div>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;

// warap our application in BrowserRouter
// Dont't use <a> tag, instead use link by react-router-dom
