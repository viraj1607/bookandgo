import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
import Mbutton from "./Mbutton";
import { Hiking_Video } from "../utils/constants";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";

const LoginSignup = ({ onClose }) => {
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
      localStorage.setItem("user", dataSignIn.user.email);
      login(dataSignIn.token);
      onClose();
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
      localStorage.setItem("user", data.user.email);
      login(data.token);
      onClose();
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full md:w-3/4 flex flex-col md:flex-row fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3000] rounded-r-3xl rounded-l-3xl">
      <div className="w-full md:w-6/12 relative">
        <video
          className="w-full h-full object-cover rounded-l-3xl"
          src={Hiking_Video}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="w-full md:w-6/12 bg-white py-8 px-6 md:px-8 flex flex-col justify-center relative rounded-r-3xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-[#002475] font-bold text-3xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form onKeyPress={handleKeyPress}>
          {!isSignIn && (
            <TextField
              inputRef={name}
              className="w-full !my-4 rounded-md"
              id="name"
              label="Name"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "15px", // Adjust the radius as needed
                },
              }}
            />
          )}
          <TextField
            inputRef={email}
            className="w-full !my-4 rounded-md"
            id="email"
            label="Email"
            variant="outlined"
            InputProps={{
              style: {
                borderRadius: "15px", // Adjust the radius as needed
              },
            }}
          />
          <TextField
            inputRef={password}
            className="w-full !my-4 rounded-md"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            InputProps={{
              style: {
                borderRadius: "15px", // Adjust the radius as needed
              },
            }}
          />
          <Mbutton
            onclick={handleSubmit}
            value={isSignIn ? "Sign In" : "Sign Up"}
          />
        </form>
        <p className="mt-4">
          {isSignIn ? (
            <>
              New User?{" "}
              <span
                className="cursor-pointer text-[#002475] font-bold"
                onClick={handleSignIn}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already Registered?{" "}
              <span
                className="cursor-pointer text-[#002475] font-bold"
                onClick={handleSignIn}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
