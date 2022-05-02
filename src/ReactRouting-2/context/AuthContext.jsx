import React, { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const login = async () => {
    let r = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: "nitesh@gmail.com",
        passwordL: "nitesh",
      }),
    });

    let data = await r.json();
    setToken(data.token);
  };

  const logout = () => {
    setToken("");
  };

  return (
    <Authcontext.Provider value={{ token, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
};
