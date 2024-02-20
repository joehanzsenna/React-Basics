import React, { useRef } from "react";
import './useRef.css'

const UseReference = () => {
  let refCount = useRef(0);
  let bgChange = useRef(null)
  let textUpdate = useRef(null)

  function handleClick() {
    refCount.current = refCount.current + 1;
    alert(`you clicked ${refCount.current} times`);
  }

  function chnageBg (){
    bgChange.current.style.backgroundColor = 'red'
  }

  function updateText () {
     textUpdate.current.textContent = 'edit'
  }
  return (
    <div>
      <button onClick={handleClick}>Click to alert refCount</button>

      <div
        ref={bgChange}
        style={{ width: "50%", height: "20vh", background: "aqua" }}
      ></div>

      <div className="bg-content">
        <button ref={bgChange} onClick={chnageBg} className="btn">
          click to change the background color
        </button>
        <p ref={textUpdate} className="txt1">Save</p>
        <button onClick={updateText}>CLick to update</button>
      </div>
    </div>
  );
};

export default UseReference;
