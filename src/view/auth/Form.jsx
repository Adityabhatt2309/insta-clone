import React, { useState } from "react";
import Button from "../../components/Button/button";
import Input from "../../components/Input";

const Form = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className=" h-screen w-screen bg-slate-300 justify-center items-center flex">
      <div className="h-[600px] w-[700px] bg-white flex">
        <div className={` ${isLoggedIn?"order-2":"order-1"} w-full h-full justify-center items-center flex flex-col`}>
          <h3 className="font-bold">Welcome</h3>
          <p className=" font-medium border-b bottom-2 border-black pb-1 px-3">
            {isLoggedIn ? "Signup" : "Login"} With Your Details
          </p>
          {
            isLoggedIn&&<Input
            className="border-2 my-2 py-1 rounded px-2"
            type="text"
            label="Enter UserName :"
            placeholder="Enter your UserName"
            onChange={"Hello"}
          />
          }
          <Input
            className="border-2 my-2 py-1 rounded px-2"
            type="email"
            label="Enter Email :"
            placeholder="Enter your Email Id..."
            onChange={"Hello"}
          />
          <Input
            className="border-2 my-2 py-1 rounded px-2"
            type="password"
            label="Enter Password :"
            placeholder="Enter your Passowrd..."
            onChange={"Hello"}
          />
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
          <p className=" text-blue-400 cursor-pointer" onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Login to Continue?":"Sign Up Here"}</p>
        </div>
        <div className={`w-full h-full bg-black ${isLoggedIn&&"order-2"}`}></div>
      </div>
    </div>
  );
};
export default Form;
