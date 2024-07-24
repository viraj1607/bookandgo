import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import axios from "axios";

const UserProfile = () => {
  const [isProfile, setIsProfile] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    address: "",
    province: "",
    pincode: "",
    mobile: "",
    email: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { logout } = useAuth();

  const getUserData = async () => {
    try {
      const user = await axios.get("http://localhost:5000/api/auth/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = user.data;
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id || name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/api/auth/", userData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log("User data updated successfully");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-4 md:p-8">
      <div className="flex flex-col shadow-custom-grey rounded-lg items-center p-8 m-8 w-full md:w-auto">
        <img
          className="w-40 rounded-full"
          src="https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
          alt="User"
        />
        <ul className="my-8 text-center md:text-left">
          <li
            className="my-2 cursor-pointer hover:underline"
            onClick={() => setIsProfile(true)}
          >
            Profile
          </li>
          <li
            className="my-2 cursor-pointer hover:underline"
            onClick={() => setIsProfile(false)}
          >
            Login Details
          </li>
          <li className="my-2 cursor-pointer hover:underline" onClick={logout}>
            Logout
          </li>
        </ul>
      </div>
      <div className="border-2 border-gray-300 m-4 p-8 rounded-lg w-full md:w-auto">
        <h2 className="font-bold text-3xl mb-4">
          {isProfile ? "Profile" : "Login Details"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isProfile ? (
            <Box className="space-y-4">
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                value={userData.name}
                onChange={handleChange}
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                id="address"
                label="Address"
                variant="outlined"
                value={userData.address}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="province"
                label="Province"
                variant="outlined"
                value={userData.province}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="pincode"
                label="Pin Code"
                variant="outlined"
                value={userData.pincode}
                onChange={handleChange}
              />
            </Box>
          ) : (
            <Box className="space-y-4">
              <TextField
                fullWidth
                id="mobile"
                label="Mobile No."
                variant="outlined"
                value={userData.mobile}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                value={userData.email}
                onChange={handleChange}
              />
            </Box>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="!mt-6 !bg-[#002475]"
          >
            Save Changes
          </Button>
        </form>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          User data updated successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UserProfile;
