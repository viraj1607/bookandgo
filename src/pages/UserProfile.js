import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

const UserProfile = () => {
  const [isProfile, setIsProfile] = useState(true);
  return (
    <div className="flex">
      <div className="flex flex-col shadow-custom-grey rounded-lg items-center p-8 m-8">
        <img
          className="w-40 rounded-full"
          src="https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
        />
        <ul className="my-8">
          <li className="my-2 cursor-pointer" onClick={()=>setIsProfile(true)}>Profile</li>
          <li className="my-2 cursor-pointer" onClick={()=>setIsProfile(false)}>Login Details</li>
          <li className="my-2 cursor-pointer">Logout</li>
        </ul>
      </div>
      <div className="border-2 border-grey m-4 p-8 rounded-lg">
        <h2 className="font-bold text-[35px]">
          {isProfile ? "Profile" : "Login Details"}
        </h2>
        {isProfile ? (
          <Box>
            <TextField id="user" label="Name" variant="outlined" />
            <TextField id="gender" label="Gender" variant="outlined" />
            <TextField id="address" label="Address" variant="outlined" />
            <TextField id="province" label="Province" variant="outlined" />
            <TextField id="pincode" label="Pin Code" variant="outlined" />
          </Box>
        ) : (
          <Box>
            <TextField id="mobile" label="Mobile No." variant="outlined" />
            <TextField id="email" label="Email Id" variant="outlined" />
          </Box>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
