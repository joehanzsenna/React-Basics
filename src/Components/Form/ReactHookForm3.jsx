import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm3 = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''

        alert('registration successful')
    };

    console.log(watch('username'));
    console.log(watch('email'));

  return (
    <div className="w-full h-screen bg-orange-900 flex justify-center items-center text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-white">React Hook Form</h1>
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            className="text-black"
            type="text"
            placeholder="enter username"
            {...register("username", {
              required: true,
              minLength: "4",
              maxLength: "10",
            })}
          />
          {errors.username?.type === "required" && (
            <p role="alert">Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p role="alert">Username cannot be less than 4</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p role="alert">Username cannot be more than 10</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            className="text-black"
            type="email"
            placeholder="enter eamil address"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p role="alert">email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p role="alert">Invalid email address</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            className="text-black"
            type="password"
            placeholder="enter password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p role="alert">Password is required</p>
          )}
          {errors.password?.type === "pattern" && (
            <p role="alert">
              Password must contain at least one uppercase letter, one lowercase
              letter, one number and one special character
            </p>
          )}
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="bg-green-300 py-1 px-4 mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm3;
