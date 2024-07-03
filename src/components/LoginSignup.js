import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
import Mbutton from "./Mbutton";
import { Hiking_Video } from "../utils/constants";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";

const LoginSignup = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const { login } = useAuth();

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
      login();
    } else {
      const objSignUp = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      const signup = await axios.post(
        "http://localhost:5000/api/auth/signup",
        objSignUp
      );
      const data = await signup.data;
      console.log(data);
      login();
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-2/4 flex rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg border border-solid border-black">
      <div className="w-6/12">
        <video
          className="w-full h-full rounded-md"
          src={Hiking_Video}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="w-6/12 bg-[#FFFFFF4D] py-4 px-8">
        <h2 className="text-[#002475] font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <TextField
            inputRef={name}
            className="w-full my-4"
            id="name"
            label="Name"
            variant="outlined"
          />
        )}
        <TextField
          inputRef={email}
          className="w-full my-4"
          id="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          inputRef={password}
          className="w-full my-4"
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
