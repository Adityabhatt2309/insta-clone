import React, { useState } from "react";
import Button from "../../components/Button/button";
import Input from "../../components/Input";

const Form = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className=" h-screen w-screen bg-slate-300 justify-center items-center flex">
      <div className="h-[500px] w-[700px] bg-white flex">
        <div
          className={` ${
            isLoggedIn ? "order-2 items-left" : "order-1 items-left"
          } w-full h-full justify-center px-[50px] flex flex-col`}
        >
          <h3 className="font-bold text-[20px]">
            Welcome {isLoggedIn && "Back"}
          </h3>
          <p className=" font-semi-bold border-black pb-1">
            Please {isLoggedIn ? "Signup" : "Login"} To Continue
          </p>
          {isLoggedIn && (
            <Input
              className="border-2 py-1 rounded px-2"
              type="text"
              label="UserName"
              placeholder="Enter your UserName"
              onChange={"Hello"}
            />
          )}
          <Input
            className="border-2 my-2 py-1 rounded px-2"
            type="email"
            label="Email"
            placeholder="Enter your Email Id"
            onChange={"Hello"}
          />
          <Input
            className="border-2 my-2 py-1 rounded px-2"
            type="password"
            label="Password"
            placeholder="Enter your Passowrd"
            onChange={"Hello"}
          />
          <div className="">
          {isLoggedIn ? (
            <Button
              type="button"
              label="Submit"
              className="px-5"
              onClick={onsubmit}
            >
              Sign up
            </Button>
          ) : (
            <Button
              type="button"
              label="Submit"
              className="px-5"
              onClick={onsubmit}
            >
              Login
            </Button>
          )}
          </div>
          <p
            className=" text-blue-400 cursor-pointer"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Login Here" : "Create New Account"}
          </p>
        </div>
        <div
          className={`w-full h-full bg-center ${isLoggedIn && "order-2"}`}
        >
          <img alt="target" className="h-full" src="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
      </div>
    </div>
  );
};
export default Form;
