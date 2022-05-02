import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>GO Here</div>
      <div >
        <div>
          <button onClick={() => navigate("/cart")}>Display Data</button>
        </div>
        <div>
          <button onClick={() => navigate("/mobile")}>Display Mobile</button>
        </div>
      </div>
    </>
  );
};

export default Button;
