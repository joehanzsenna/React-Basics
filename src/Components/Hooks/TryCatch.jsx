import React, { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import "./style.css";

const TryCatch = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  let api1 = `https://fakestoreapi.com/products`;
  let api2 = `https://fakestoreapi.com/products?limit=6`;

  const fetchApi = async () => {
    try{
        const response = await fetch(api2)
        const data = await response.json()
        setItems(data)
        setLoading(false)
    }catch(error) {
        setError(`oops something is wrong`)
    }finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="effectContainer">
      <h1 contentEditable="true">Something here</h1>
      <div className="effectContent1">
        <h2>{error}</h2>
        {loading && <CircleLoader />}
      </div>

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

export default TryCatch;
