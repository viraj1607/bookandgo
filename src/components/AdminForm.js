import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextArea from "../components/TextArea";

const AdminForm = ({ params }) => {
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [amenities, setAmenities] = useState();
  const [facilities, setFacilities] = useState();
  const [category, setCategory] = useState();
  const textArea = TextArea();
  return (
    <div className="w-10/12 p-4">
      <h2 className="text-center font-bold text-3xl my-2">
        {params && params == "hotel" ? "Hotel" : "Flight"}
      </h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="border border-black m-4 p-8 rounded-md"
      >
        <TextField id="name" label="Hotel Name" variant="outlined" />
        <TextField id="address" label="Address" variant="outlined" />
        <TextField id="price" label="Price" variant="outlined" type="number" />
        <TextField
          id="reviews"
          label="Reviews (Out of 5)"
          variant="outlined"
          type="number"
        />
        <TextField id="landmark" label="Landmark" variant="outlined" />
        <FormControl>
          <InputLabel id="city">City</InputLabel>
          <Select label="City" labelId="city" value={city}>
            <MenuItem>Toronto</MenuItem>
            <MenuItem>Montreal</MenuItem>
            <MenuItem>Vancouver</MenuItem>
            <MenuItem>Calgary</MenuItem>
            <MenuItem>Edmonton</MenuItem>
            <MenuItem>Ottawa</MenuItem>
            <MenuItem>Winnipeg</MenuItem>
            <MenuItem>Quebec City</MenuItem>
            <MenuItem>Hamilton</MenuItem>
            <MenuItem>Kitchener</MenuItem>
            <MenuItem>London</MenuItem>
            <MenuItem>Halifax</MenuItem>
            <MenuItem>Victoria</MenuItem>
            <MenuItem>Saskatoon</MenuItem>
            <MenuItem>Regina</MenuItem>
            <MenuItem>St. John's</MenuItem>
            <MenuItem>Windsor</MenuItem>
            <MenuItem>Oshawa</MenuItem>
            <MenuItem>Barrie</MenuItem>
            <MenuItem>Kelowna</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="province">Province</InputLabel>
          <Select label="Province" labelId="province" value={province}>
            <MenuItem>Ontario</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>British Columbia</MenuItem>
            <MenuItem>Alberta</MenuItem>
            <MenuItem>Manitoba</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>Nova Scotia</MenuItem>
            <MenuItem>Saskatchewan</MenuItem>
            <MenuItem>Newfoundland and Labrador</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="amenities">Amenities</InputLabel>
          <Select label="Amenities" labelId="amenities" value={amenities}>
            <MenuItem>Ontario</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>British Columbia</MenuItem>
            <MenuItem>Alberta</MenuItem>
            <MenuItem>Manitoba</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>Nova Scotia</MenuItem>
            <MenuItem>Saskatchewan</MenuItem>
            <MenuItem>Newfoundland and Labrador</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="facilities">Facilities</InputLabel>
          <Select label="Facilities" labelId="facilities" value={facilities}>
            <MenuItem>Ontario</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>British Columbia</MenuItem>
            <MenuItem>Alberta</MenuItem>
            <MenuItem>Manitoba</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>Nova Scotia</MenuItem>
            <MenuItem>Saskatchewan</MenuItem>
            <MenuItem>Newfoundland and Labrador</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="category">Category</InputLabel>
          <Select label="Category" labelId="category" value={category}>
            <MenuItem>Ontario</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>British Columbia</MenuItem>
            <MenuItem>Alberta</MenuItem>
            <MenuItem>Manitoba</MenuItem>
            <MenuItem>Quebec</MenuItem>
            <MenuItem>Nova Scotia</MenuItem>
            <MenuItem>Saskatchewan</MenuItem>
            <MenuItem>Newfoundland and Labrador</MenuItem>
          </Select>
        </FormControl>
        <TextField id="lat" label="Latitude" variant="outlined" />
        <TextField id="long" label="Longitude" variant="outlined" />
        <TextField id="image360" label="Image 360" variant="outlined" />
        {textArea}
      </Box>
    </div>
  );
};

export default AdminForm;
