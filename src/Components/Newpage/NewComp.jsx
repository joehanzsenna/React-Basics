import React from "react";
import NewProduct from "./NewProduct";
import img01 from "../../assets/image001.png";

const person = {
  image: img01,
  firstName: "Lucy",
  lastName: "Adams",
  age: 40,
};

const NewComp = () => {
  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        margin: "0 auto",
        background: "orange",
        padding: "3rem",
        marginTop: "20rem",
      }}
    >
      <NewProduct
        image={person.image}
        firstName={person.firstName}
        lastName={person.lastName}
        age={person.age}
      />
    </div>
  );
};

export default NewComp;
