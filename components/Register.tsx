"use client";
import React, { useState } from "react";
import Button from "./Button";

const Register = ({
  loggedin,
  registered,
}: {
  loggedin: React.Dispatch<React.SetStateAction<boolean>>;
  registered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [show, setShow] = useState("show");
  const [isShow, setisShow] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleComponents = () => {
    loggedin(true);
    registered(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user-registeration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        handleComponents();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPassword = () => {
    setShow("hide");
    setisShow((prev) => !prev);
    if (show === "hide") {
      setShow("show");
    }
  };

  return (
    <>
      <section className="absolute inset-0 w-full h-[100vh] p-4 flex items-center justify-center">
        <div className="bg-black w-full h-[100vh] absolute bg-opacity-50 backdrop-blur-sm z-10"></div>
        <form
          onSubmit={handleSubmit}
          className="z-50 lg:shadow-md lg:rounded-lg w-full rounded-md lg:w-[20vw] bg-white p-8"
        >
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <h2 className="text-gray-500 mt-3">
            Enter the all fields which are required
          </h2>
          <h2 className="text-red-500 mt-1">{message}</h2>
          <input
            className="mt-4 border-gray-200 outline-none bg-gray-100 py-2 pl-3 w-full rounded-md"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="name"
            required
            autoComplete="off"
          />
          <input
            className="mt-4 border-gray-200 outline-none bg-gray-100 py-2 pl-3 w-full rounded-md"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
            required
            autoComplete="off"
          />
          <div className="mt-4 border-gray-200 bg-gray-100 py-2 pl-3 w-full rounded-md relative flex items-center justify-between">
            <input
              className="bg-gray-100 w-full outline-none border-none"
              onChange={handleChange}
              type={isShow ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
              autoComplete="off"
            />
            <h1 onClick={handleShowPassword} className="cursor-pointer pr-3">
              {show}
            </h1>
          </div>
          <Button
            buttonType="submit"
            text="Create"
            buttonStyles="bg-violet-500 text-white rounded-md w-full py-2 mt-6"
          />
          <h1 className="mt-4">
            Already have an account?{" "}
            <span
              className="text-violet-500 cursor-pointer"
              onClick={handleComponents}
            >
              sign in
            </span>
          </h1>
        </form>
      </section>
    </>
  );
};

export default Register;
