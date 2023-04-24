import React from "react";
import { useForm } from "react-hook-form";
import { addEmail, loginUser } from "../features/auth/authSlice";
import {useDispatch} from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser({email: data.email}));
    dispatch(addEmail(data.email));
  };

  return (
    <div className="m-10 p-10 w-[250px] h-[300px] mx-auto border bg-slate-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Email</p>
        <input
          type="text"
          {...register("email")}
          placeholder="Email"
          className="border"
        />
        <br /> <br />
        <p>Password</p>
        <input
          type="text"
          {...register("password")}
          placeholder="Password"
          className="border"
        />
        <br /> <br />
        <button
          type="submit"
          className="w-full bg-success rounded-lg text-white font-semibold p-1"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
