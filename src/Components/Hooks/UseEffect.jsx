import React, { useEffect, useState } from "react";
import './style.css'

const UseEffect = () => {
  const [items, setItems] = useState([]);

  let api1 = `https://fakestoreapi.com/products`;
  let api2 = `https://fakestoreapi.com/products?limit=6`;

  function fetchApi() {
    fetch(api2)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error(`Error fetching data`, error));
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="effectContainer">
      <div className="effect-content">
        {items.map((item) => (
          <div className="effectItem" key={item.id}>
            <img src={item.image} alt="" />
            <div>
              <div className="innerText1">
                <h3>{item.category}</h3>
                <h3>{item.price}</h3>
              </div>
              <div className="innerText2">
                <h3>{item.title}</h3>
                <button className="btn-cart">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;


