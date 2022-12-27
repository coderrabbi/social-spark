import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="p-8 shadow-lg rounded-xl text-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-cyan-600 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
            <h3 className="text-1xl font-semibold text-gray-500">
              Sign in to your account!
            </h3>
            <div className="text-left pt-3">
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md bg-gray-100 shadow-md focus:outline-none  border-gray-900"
              />
              <input
                type="password"
                placeholder="Password"
                className="block p-2 mt-3 rounded-md bg-gray-100 shadow-md focus:outline-none  border-gray-900"
              />
              <a className="text-sm text-gray-900 underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-gray-900 p-2 pr-5 pl-5 text-white font-semibold rounded-xl border-gray-900  m-4"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
