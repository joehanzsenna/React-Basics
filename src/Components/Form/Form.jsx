import React, { useState } from "react";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful");
      setFormData({
        username: '',
        email: '',
        password: ''
      })
      console.log(formData);
    }

  };

   const validatePassword = (password) => {
     const passRegex =
       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     return passRegex.test(password);
   };
   const isValidEmail = (email) => {
     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
     return emailRegex.test(email);
   };

  const validateForm = (data) => {
    let errors = {};
    if (!data.username) {
      errors.username = "username is required";
    } else if (data.username.length < 5) {
      errors.username = " username must not be less than 5";
    }

    if (!data.email) {
      errors.email = "email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "invalid Email";
    }

    if (!data.password) {
      errors.password = "password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password should not be less than 6";
    } else if (!validatePassword(data.password)){
        errors.password = 'password must contain at least one uppercase, one lowercase, one number and a special character '
    }
    return errors;
  };

  return (
    <div className="w-full h-[80vh] bg-blue-600 flex justify-center items-center">
      <form className="text-white" onSubmit={handleSubmit}>
        <h2>Form Validation </h2>
        <div className="flex flex-col ">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleInputChange}
            value={formData.username}
            className="text-black"
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={formData.email}
            className="text-black"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInputChange}
            value={formData.password}
            className="text-black"
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-4 px-4 py-2 bg-red-300"
        />
      </form>
    </div>
  );
};

export default Form;
