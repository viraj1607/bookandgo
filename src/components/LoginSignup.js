import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import Mbutton from "./Mbutton";
import { Hiking_Video } from "../utils/constants";
import axios from "axios";

const LoginSignup = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async () => {
    if (isSignIn) {
      const objSignIn = {
        email: email.current.value,
        password: password.current.value,
      };

      const signin = await axios.post(
        "http://localhost:5000/api/auth/signin",
        objSignIn
      );
      const dataSignIn = await signin.data;
      console.log(dataSignIn);
    } else {
      const objSignUp = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      const signup = await axios.post(
        "http://localhost:5000/api/auth/signin",
        objSignUp
      );
      const data = await signup.data;
      console.log(data);
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[75%] rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
      <div className="w-full md:w-6/12">
        <video
          className="w-full h-full rounded-md"
          src={Hiking_Video}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="w-full md:w-6/12 bg-white bg-opacity-30 py-4 px-8">
        <h2 className="text-[#002475] font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <TextField
            inputRef={name}
            className="w-full !my-4"
            id="name"
            label="Name"
            variant="outlined"
          />
        )}
        <TextField
          inputRef={email}
          className="w-full !my-4"
          id="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          inputRef={password}
          className="w-full !my-4"
          id="password"
          label="Password"
          variant="outlined"
          type="password"
        />
        <br />
        <Mbutton
          onclick={handleSubmit}
          value={isSignIn ? "Sign In" : "Sign Up"}
        />
        <p>
          {isSignIn ? "New User? Sign Up" : "Already Registered? Sign In"}{" "}
          <span
            className="cursor-pointer text-[#002475] font-bold"
            onClick={handleSignIn}
          >
            here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
