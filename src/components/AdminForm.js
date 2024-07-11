import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import TextArea from "./TextArea";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";

const AdminForm = ({ params }) => {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [landmark, setLandmark] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [image360, setImage360] = useState("");
  const textArea = TextArea();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleUpload = () => {
    const promises = [];
    images.forEach((image) => {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      promises.push(
        new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress);
            },
            (error) => {
              reject(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            }
          );
        })
      );
    });

    Promise.all(promises)
      .then((urls) => {
        setImageURLs(urls);
        console.log(urls);
        alert("All images uploaded successfully!");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      price,
      reviews,
      landmark,
      city,
      province,
      amenities,
      facilities,
      category,
      latitude,
      longitude,
      image360,
      description: textArea.props.value,
      imageURLs,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/hotels",
        data
      );
      console.log(response.data);
      alert("Data submitted successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the data.");
    }
  };

  const resetForm = () => {
    setCity("");
    setProvince("");
    setAmenities([]);
    setFacilities([]);
    setCategory("");
    setName("");
    setAddress("");
    setPrice(0);
    setReviews(0);
    setLandmark("");
    setLatitude("");
    setLongitude("");
    setImage360("");
    setImages([]);
    setImageURLs([]);
    setUploadProgress(0);
  };

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
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            id="name"
            label="Hotel Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            id="reviews"
            label="Reviews (Out of 5)"
            variant="outlined"
            type="number"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
          />
          <TextField
            id="landmark"
            label="Landmark"
            variant="outlined"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
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
              multiple
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
              multiple
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
          <TextField
            id="lat"
            label="Latitude"
            variant="outlined"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <TextField
            id="long"
            label="Longitude"
            variant="outlined"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <TextField
            id="image360"
            label="Image 360"
            variant="outlined"
            value={image360}
            onChange={(e) => setImage360(e.target.value)}
          />
          {textArea}
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="my-4"
          />
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload Images
          </Button>
          <div>
            {uploadProgress > 0 && (
              <progress value={uploadProgress} max="100" />
            )}
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-4"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AdminForm;
