import React from "react";
import './button.css'
import img01 from '../../assets/Home-MainImg-1.jpg'

const Button = () => {
  return (
    <div className="container">
      <button>My first react button Component</button>
      <img src={img01} alt="" style={{width:'50%', height:'auto'}} />
    </div>
  );
};

export default Button;
