import React from "react";

const Event = () => {

  function click () {
    alert(`You just clicked me`)
  }

  return (
    <div style={{width:'70%', margin:'0 auto'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>

        <button onClick={click}>Click Me</button>

        <button onMouseOver={() => alert(`You Hovered on the second button`)}>Second Button</button>

      </div>
    </div>
  );
};

export default Event;
