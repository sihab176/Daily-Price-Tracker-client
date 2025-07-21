import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import AuthLayout from "./AuthLayout/AuthLayout";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import TracLogo from "../Shared/TracLogo/TracLogo";

const Login = () => {
  console.log(import.meta.env.VITE_appId);
  const { loginUser } = use(AuthContext);
  //   console.log(loginUser);

  const navigate = useNavigate("/");
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.email, data.password);
    if (data) {
      loginUser(data.email, data.password)
        .then((res) => {
          console.log(res.user);
          navigate(`${location.state ? location.state : "/"}`);
          Swal.fire({
            icon: "success",
            title: "welcome to Local Harvest ",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
          toast.warn(error.message);
        });
    }
  };

  return (
    <section className="flex justify-center md:w-11/12 md:mx-auto md:flex-row flex-col items-center">
      <div className=" flex-1 lg:ml-10 mb-4">
        <div className="ml-8">
          <TracLogo></TracLogo>
        </div>
        <div>
          <h1 className="text-5xl ">Welcome Back</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label font-bold">Email</label>
            <input
              type="email"
              className="input"
              {...register("email", {
                required: true,
              })}
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">please inter your email</p>
            )}
            <label className="label font-bold">Password</label>
            <input
              type="password"
              className="input"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">please inter your password</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">The password must be 6 characters</p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-primary w-80 mt-4">Login</button>
          </fieldset>
          <p>
            Don’t have any account?{" "}
            <Link
              className="text-blue-600 hover:border-b hover:border-blue-600"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>
        <GoogleLogin />
        <ToastContainer />
      </div>
      <div className="flex-1 lg:mr-10">
        <AuthLayout />
      </div>
    </section>
  );
};

export default Login;
