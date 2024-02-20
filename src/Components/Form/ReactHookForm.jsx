import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
      const onSubmit = (data, e) => {
        e.target[0].value = ""; // for username
        e.target[1].value = ""; // for email
        e.target[2].value = ""; // for passowrd
        console.log(data);
      };


  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center flex-col ">
      <h1>React Hook Form </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col ">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="enter username"
            {...register("username", {
              required: true,
              minLength: "3",
              maxLength: "10",
            })}
          />
          {errors.username?.type === "required" && (
            <p role="alert">username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p role="alert">username should not be less than 3</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p role="alert">username should not be more than 10</p>
          )}
        </div>
        <div className="flex flex-col ">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="enter email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p role="alert">email is required</p>
          )}
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">password:</label>
          <input
            type="text"
            placeholder="enter password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p role="alert">password is required</p>
          )}
          {errors.password?.type === "pattern" && (
            <p role="alert">
              password should have at least one uppercase letter, one lowercase
              letter, one number and one special character:
            </p>
          )}
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="bg-red-600 text-white py-2 px-4 mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;
