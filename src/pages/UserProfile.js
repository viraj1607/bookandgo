import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../utils/AuthContext";

const UserProfile = () => {
  const [isProfile, setIsProfile] = useState(true);
  const {logout}=useAuth()
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-4 md:p-8">
      <div className="flex flex-col shadow-custom-grey rounded-lg items-center p-8 m-8 w-full md:w-auto">
        <img
          className="w-40 rounded-full"
          src="https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
          alt="User"
        />
        <ul className="my-8 text-center md:text-left">
          <li className="my-2 cursor-pointer hover:underline" onClick={() => setIsProfile(true)}>Profile</li>
          <li className="my-2 cursor-pointer hover:underline" onClick={() => setIsProfile(false)}>Login Details</li>
          <li className="my-2 cursor-pointer hover:underline" onClick={logout}>Logout</li>
        </ul>
      </div>
      <div className="border-2 border-gray-300 m-4 p-8 rounded-lg w-full md:w-auto">
        <h2 className="font-bold text-3xl mb-4">
          {isProfile ? "Profile" : "Login Details"}
        </h2>
        {isProfile ? (
          <Box className="space-y-4">
            <TextField fullWidth id="user" label="Name" variant="outlined" />
            <TextField fullWidth id="gender" label="Gender" variant="outlined" />
            <TextField fullWidth id="address" label="Address" variant="outlined" />
            <TextField fullWidth id="province" label="Province" variant="outlined" />
            <TextField fullWidth id="pincode" label="Pin Code" variant="outlined" />
          </Box>
        ) : (
          <Box className="space-y-4">
            <TextField fullWidth id="mobile" label="Mobile No." variant="outlined" />
            <TextField fullWidth id="email" label="Email Id" variant="outlined" />
          </Box>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
