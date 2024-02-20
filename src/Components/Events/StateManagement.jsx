import React, { useRef, useState } from "react";
import './EventsStyle.css'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const StateManagement = () => {
    const [kant, setKant] = useState(0)
    const [display, setDisplay] = useState(0)
    const [eye, setEye] = useState(false);


    const eyeChange = useRef(false)
    const colorChange = useRef(null)

    const click = () =>{
        setKant(kant + 3)
    }
  const increase = () => {
    if(display >= 0){
      setDisplay(display + 1);
      colorChange.current.style.backgroundColor = 'green'
    }else{
      setDisplay(display + 1);
    }
  }
  const decrease = () => {
     if (display <= 0) {
       setDisplay(display - 1);
       colorChange.current.style.backgroundColor = "red";
      } else {
        setDisplay(display - 1);
      }
    }
    const reset = () => {
      setDisplay(0)
      colorChange.current.style.backgroundColor = "yellow";

  }



  // let eyes = false
  function changeEye () {
    if (eye == false) {
      setEye(<FaEye />);
      // eyes = true
      console.log('true');
    } else {
      setEye(<FaEyeSlash />);
      // eyes = false
      console.log('false');
    }
  }



  return (
    <div className="event-container">
      <button onClick={click}>You clicked me {kant} times</button>

      <div ref={colorChange} className="count">
        <h2>{display}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="eyeSection">
        <h1>{eye}</h1>
        <button onClick={changeEye}>change eye </button>


        {/* <h1>{eye}</h1> */}
        {/* <button onClick={changeEye}>change eye </button> */}
        {/* eye == <FaEyeSlash /> ? <FaEye /> : <FaEyeSlash />; */}
      </div>
    </div>
  );
};

export default StateManagement;
