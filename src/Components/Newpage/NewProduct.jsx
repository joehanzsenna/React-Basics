import React from "react";
// import './product.css'

const NewProduct = ({image, firstName, lastName, age}) => {
  return (
    <div className="singlePerson">
        <img src={image} alt="" />
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <p>{age}</p>
    </div>
  );
};

export default NewProduct;
