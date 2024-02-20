import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required('username is required please')
    .min(4, 'username cannot be less than 4')
    .max(10, 'username cannot be more than 10'),
    email: yup.string().required('email is required ')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'email address is not valid'),
    password: yup.string().required('password is required ')
    .min(4, 'password cannot be less than 4')
    .max(10, 'password cannot be more than 10')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'password should have at least one uppercase letter, one lowercase letter, one number and one special character:'),
  })
  .required();

export default function ReactHookForm2() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = (data, e) =>{
      e.target[0].value = ""; // for username
      e.target[1].value = ""; // for email
      e.target[2].value = ""; // for passowrd
      console.log(data);
      alert('Registration successful')
    }
    console.log(watch('username'));
    console.log(watch( 'email'));

  return (
    <div className="w-full h-screen bg-yellow-600 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col ">
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            placeholder="enter username"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="enter email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            placeholder="enter Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="py-2 px-4 mt-4 bg-green-400 text-red-500"
          />
        </div>
      </form>
    </div>
  );
}
