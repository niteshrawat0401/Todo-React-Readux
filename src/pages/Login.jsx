import React from "react";
// import SignIn from "../componenets/SignIn";
// import SignGoogle from "../componenets/SignGoogle";
// import Signup from "../componenets/Signup";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <h1>
        <div>Login page</div>
      <button onClick={() => navigate("/login/Sign-in")}>Sign-in</button>
      <button onClick={() => navigate("/login/Sign-up")}>Sign-up</button>
      <button onClick={() => navigate("/login/google")}>Sign-in with Google</button>
      <div>

          <div>
              <Outlet/>
          </div>
        {/* <Routes>
          <Route path="Sign-in" element={<SignIn />} />
          <Route path="Sign-up" element={<Signup />} />
          <Route path="google" element={<SignGoogle />} />
        </Routes> */}
      </div>
    </h1>
  );
};

export default Login;
