import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import TextArea from "./TextArea";

const AdminForm = ({ params }) => {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [amenities, setAmenities] = useState("");
  const [facilities, setFacilities] = useState("");
  const [category, setCategory] = useState("");
  const textArea = TextArea();

  return (
    <div className="w-10/12 mx-auto p-4">
      <h2 className="text-center font-bold text-3xl my-2">
        {params && params === "hotel" ? "Hotel" : "Flight"}
      </h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        className="border border-black m-4 p-8 rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <FormControl fullWidth>
            <InputLabel id="city">City</InputLabel>
            <Select
              label="City"
              labelId="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value="Toronto">Toronto</MenuItem>
              <MenuItem value="Montreal">Montreal</MenuItem>
              <MenuItem value="Vancouver">Vancouver</MenuItem>
              <MenuItem value="Calgary">Calgary</MenuItem>
              <MenuItem value="Edmonton">Edmonton</MenuItem>
              <MenuItem value="Ottawa">Ottawa</MenuItem>
              <MenuItem value="Winnipeg">Winnipeg</MenuItem>
              <MenuItem value="Quebec City">Quebec City</MenuItem>
              <MenuItem value="Hamilton">Hamilton</MenuItem>
              <MenuItem value="Kitchener">Kitchener</MenuItem>
              <MenuItem value="London">London</MenuItem>
              <MenuItem value="Halifax">Halifax</MenuItem>
              <MenuItem value="Victoria">Victoria</MenuItem>
              <MenuItem value="Saskatoon">Saskatoon</MenuItem>
              <MenuItem value="Regina">Regina</MenuItem>
              <MenuItem value="St. John's">St. John's</MenuItem>
              <MenuItem value="Windsor">Windsor</MenuItem>
              <MenuItem value="Oshawa">Oshawa</MenuItem>
              <MenuItem value="Barrie">Barrie</MenuItem>
              <MenuItem value="Kelowna">Kelowna</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="province">Province</InputLabel>
            <Select
              label="Province"
              labelId="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <MenuItem value="Ontario">Ontario</MenuItem>
              <MenuItem value="Quebec">Quebec</MenuItem>
              <MenuItem value="British Columbia">British Columbia</MenuItem>
              <MenuItem value="Alberta">Alberta</MenuItem>
              <MenuItem value="Manitoba">Manitoba</MenuItem>
              <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
              <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
              <MenuItem value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="amenities">Amenities</InputLabel>
            <Select
              label="Amenities"
              labelId="amenities"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
            >
              <MenuItem value="Free WiFi">Free WiFi</MenuItem>
              <MenuItem value="Parking">Parking</MenuItem>
              <MenuItem value="Pool">Pool</MenuItem>
              <MenuItem value="Gym">Gym</MenuItem>
              <MenuItem value="Spa">Spa</MenuItem>
              <MenuItem value="Restaurant">Restaurant</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="facilities">Facilities</InputLabel>
            <Select
              label="Facilities"
              labelId="facilities"
              value={facilities}
              onChange={(e) => setFacilities(e.target.value)}
            >
              <MenuItem value="Business Center">Business Center</MenuItem>
              <MenuItem value="Conference Room">Conference Room</MenuItem>
              <MenuItem value="Banquet Hall">Banquet Hall</MenuItem>
              <MenuItem value="Fitness Center">Fitness Center</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <Select
              label="Category"
              labelId="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="Luxury">Luxury</MenuItem>
              <MenuItem value="Budget">Budget</MenuItem>
              <MenuItem value="Mid-range">Mid-range</MenuItem>
              <MenuItem value="Boutique">Boutique</MenuItem>
            </Select>
          </FormControl>
          <TextField id="lat" label="Latitude" variant="outlined" />
          <TextField id="long" label="Longitude" variant="outlined" />
          <TextField id="image360" label="Image 360" variant="outlined" />
          {textArea}
        </div>
      </Box>
    </div>
  );
};

export default AdminForm;
