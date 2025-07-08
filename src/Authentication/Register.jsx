import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthLayout from "./AuthLayout/AuthLayout";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const { createUser, updateUser } = useAuth();
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, profilePicture);
    createUser(data.email, data.password).then((res) => {
    console.log(res);

      //! update user ===================>
      const userProfileInfo = {
        displayName: data.name,
        photoURL: profilePicture,
      };
      updateUser(userProfileInfo).then(() => {
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "welcome to BookBridge ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    });
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    setProfilePicture(res.data.data.url);
  };
  //   console.log(profilePicture);
  return (
    <section className="flex justify-center md:w-11/12 md:mx-auto md:flex-row flex-col items-center">
      <div className="flex-1 ">
        <div className="bg-white lg:ml-10">
          <div>
            <h1 className="  text-4xl">Create an Account</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* photo ----------> */}
            <fieldset className="fieldset">
              <label htmlFor="image" className="label font-bold">
                Select Image:
              </label>
              <input
                onChange={handleImageUpload}
                className=" cursor-pointer input pt-2"
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </fieldset>
            {/* name  */}
            <fieldset className="fieldset">
              <label className="label font-bold">Name</label>

              <input
                type="text"
                className="input"
                placeholder="User Name"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600">Please enter your name</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              {/* email ------------> */}
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
              {/* password ---------->*/}
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
                <p className="text-red-500">
                  The password must be 6 characters
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-primary w-80 mt-4">register</button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:border-b border-blue"
              >
                Login
              </Link>
            </p>
          </form>
          <GoogleLogin />
        </div>
      </div>
      <div className="flex-1 lg:mr-10">
        <AuthLayout />
      </div>
    </section>
  );
};

export default Register;
