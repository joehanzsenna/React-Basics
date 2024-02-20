import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const StateComp = () => {
  const [eye, setEye] = useState(false);

  function changeEye() {
    setEye(!eye)
  }

  return (
    <div
      style={{
        width: "80%",
        height: "50vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
      }}
    >
      {eye ? <FaEye /> : <FaEyeSlash />}
      <button onClick={changeEye}>change eye </button>
    </div>
  );
};

export default StateComp;
