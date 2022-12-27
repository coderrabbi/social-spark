import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const {
    userCreate,
    setLoading,
    handleGithubSignIn,
    updateUser,
    googleSignIn,
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userName = form.userName.value;
    userCreate(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(false);
        const userInfo = {
          displayName: form.userName.value,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(userName, email, role);
          })
          .catch((error) => console.log(error));
        toast.success("user created successfully");

        form.reset();
      })
      .catch((error) => console.log(error));
    form.reset();
  };
  return (
    <>
      <div class="flex h-screen">
        <div class="m-auto">
          <form
            onSubmit={handleSubmit}
            class="p-8 shadow-lg rounded-xl text-center bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline text-cyan-600 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h1 class="text-3xl font-bold text-gray-900">Sign In</h1>
            <h3 class="text-1xl font-semibold text-gray-500">
              Sign up to create a new account!
            </h3>
            <div class="text-left flex flex-col gap-3 pt-3">
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                class="p-2 rounded-lg bg-gray-100 shadow-md focus:outline-none  border-gray-900"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="p-2 rounded-lg bg-gray-100 shadow-md focus:outline-none  border-gray-900"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                class="block p-2 rounded-lg bg-gray-100 shadow-md focus:outline-none  border-gray-900"
              />
            </div>
            <button
              type="submit"
              class="bg-gray-900 p-2 pr-5 pl-5 text-white font-semibold rounded-xl border-cyan-700 focus:ring-2 m-4"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
