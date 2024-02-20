import React from 'react'
import './product.css'


function ProductCard(props) {
  return (
    <div className="singleCard">
      <img src={props.image} className="cardImg" alt="" />
      <h3 className="text1">{props.venue}</h3>
      <h3 className="text2">{props.location}</h3>
      <div className="innerCard">
        <h1 className='text3'>{props.price}/Visit</h1>
        <button className="innerBtn">Book Now</button>
      </div>
    </div>
  );
}

export default ProductCard