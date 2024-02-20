import React from "react";
import image01 from "../../assets/woman01.webp";
import image02 from "../../assets/woman02.webp";
import NewProduct from "./NewProduct";


const obj = {
  image: image01,
  firstName: "james",
  lastName: "Adam",
  age: 24,
};
const obj2 = {
  image: image02,
  firstName: "Fred",
  lastName: "Williams",
  age: 30,
};

const PersonComp = () => {
  return (
    <div>
      <NewProduct
        image={obj.image}
        firstName={obj.firstName}
        lastName={obj.lastName}
        age={obj.age}
      />

      <NewProduct
        image={obj2.image}
        firstName={obj2.firstName}
        lastName={obj2.lastName}
        age={obj2.age}
      />
    </div>
  );
};

export default PersonComp;
