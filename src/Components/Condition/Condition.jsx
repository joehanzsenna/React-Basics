import React from "react";
import Condition1 from "./Condition1";
import Condition2 from "./Condition2";

const Condition = () => {
    let content = null
    let condition = true

    if (condition == true){
        content = <Condition1/>
    }else {
        content = <Condition2/>
    }

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Lets preview one of the conditions </h1>
      <h2>{content}</h2>
      <h1>
        <Condition1 />
      </h1>

      <p>{condition == true ? <Condition1 /> : <Condition2 />}</p>

    </div>
  );
};

export default Condition;
