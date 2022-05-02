import React, { useState } from "react";

const Form = () => {
  const [inp, setInp] = useState("");
  const [pass, setPass] = useState("");

  const usernameFun = (event) => {
    setInp(event.target.value);
  };
  const userPassword = (event) => {
    setPass(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: inp,
      pasaword: pass,
    };
    // console.log(data)
    setInp("");
    setPass("");
    // console.log(event.target.value);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <input value={inp} type="text" name="" onChange={usernameFun} />
        </div>
        <div>
          <input value={pass} type="password" name="" onChange={userPassword} />
        </div>
        <div>
          <button type="submit">Click</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
