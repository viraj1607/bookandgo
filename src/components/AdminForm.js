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
  // Common state
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const textArea = TextArea();

  // Hotel state
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [reviews, setReviews] = useState(0);
  const [landmark, setLandmark] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [image360, setImage360] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  // Flight state
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripType, setTripType] = useState("");

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

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `logos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageURL(downloadURL);
          alert("Logo uploaded successfully!");
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commonData = {
      name,
      price,
      description: textArea.props.value,
      imageURL,
    };

    const hotelData = {
      ...commonData,
      address,
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
      imageURLs,
    };

    const flightData = {
      ...commonData,
      from,
      to,
      tripType,
    };

    const data = params === "hotel" ? hotelData : flightData;

    try {
      const response = await axios.post(
        `http://localhost:5000/api/${
          params === "hotel" ? "hotels" : "flights"
        }`,
        data
      );
      console.log(response.data);
      alert("Data submitted successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
      // alert("An error occurred while submitting the data.");
    }
  };

  const resetForm = () => {
    setName("");
    setPrice(0);
    setImageURL("");
    setUploadProgress(0);
    textArea.props.value = ""; 

    if (params === "hotel") {
      setCity("");
      setProvince("");
      setAmenities([]);
      setFacilities([]);
      setCategory("");
      setAddress("");
      setReviews(0);
      setLandmark("");
      setLatitude("");
      setLongitude("");
      setImage360("");
      setImages([]);
      setImageURLs([]);
    } else {
      setFrom("");
      setTo("");
      setTripType("");
    }
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
            label={params === "hotel" ? "Hotel Name" : "Airline Name"}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {params === "hotel" ? (
            <>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                  {/* Add the rest of the cities */}
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
                  <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
                  <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
                  <MenuItem value="New Brunswick">New Brunswick</MenuItem>
                  <MenuItem value="Newfoundland and Labrador">
                    Newfoundland and Labrador
                  </MenuItem>
                  <MenuItem value="Prince Edward Island">
                    Prince Edward Island
                  </MenuItem>
                  <MenuItem value="Northwest Territories">
                    Northwest Territories
                  </MenuItem>
                  <MenuItem value="Yukon">Yukon</MenuItem>
                  <MenuItem value="Nunavut">Nunavut</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="amenities">Amenities</InputLabel>
                <Select
                  label="Amenities"
                  labelId="amenities"
                  multiple
                  value={amenities}
                  onChange={(e) => setAmenities(e.target.value)}
                >
                  <MenuItem value="Free Wi-Fi">Free Wi-Fi</MenuItem>
                  <MenuItem value="Parking">Parking</MenuItem>
                  <MenuItem value="Swimming Pool">Swimming Pool</MenuItem>
                  <MenuItem value="Fitness Center">Fitness Center</MenuItem>
                  <MenuItem value="Restaurant">Restaurant</MenuItem>
                  <MenuItem value="Room Service">Room Service</MenuItem>
                  <MenuItem value="Laundry Service">Laundry Service</MenuItem>
                  <MenuItem value="Spa">Spa</MenuItem>
                  <MenuItem value="Bar">Bar</MenuItem>
                  <MenuItem value="Airport Shuttle">Airport Shuttle</MenuItem>
                  <MenuItem value="Pet Friendly">Pet Friendly</MenuItem>
                  <MenuItem value="Business Center">Business Center</MenuItem>
                  <MenuItem value="Meeting Rooms">Meeting Rooms</MenuItem>
                  <MenuItem value="24-hour Front Desk">
                    24-hour Front Desk
                  </MenuItem>
                  <MenuItem value="Concierge Service">
                    Concierge Service
                  </MenuItem>
                  <MenuItem value="Gift Shop">Gift Shop</MenuItem>
                  <MenuItem value="Non-smoking Rooms">
                    Non-smoking Rooms
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="facilities">Facilities</InputLabel>
                <Select
                  label="Facilities"
                  labelId="facilities"
                  multiple
                  value={facilities}
                  onChange={(e) => setFacilities(e.target.value)}
                >
                  <MenuItem value="Elevator">Elevator</MenuItem>
                  <MenuItem value="Wheelchair Accessible">
                    Wheelchair Accessible
                  </MenuItem>
                  <MenuItem value="Banquet Hall">Banquet Hall</MenuItem>
                  <MenuItem value="Conference Rooms">Conference Rooms</MenuItem>
                  <MenuItem value="ATM">ATM</MenuItem>
                  <MenuItem value="Safe">Safe</MenuItem>
                  <MenuItem value="Luggage Storage">Luggage Storage</MenuItem>
                  <MenuItem value="Library">Library</MenuItem>
                  <MenuItem value="Garden">Garden</MenuItem>
                  <MenuItem value="Terrace">Terrace</MenuItem>
                  <MenuItem value="Chapel">Chapel</MenuItem>
                  <MenuItem value="BBQ Facilities">BBQ Facilities</MenuItem>
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
                  <MenuItem value="Budget">Budget</MenuItem>
                  <MenuItem value="Standard">Standard</MenuItem>
                  <MenuItem value="Deluxe">Deluxe</MenuItem>
                  <MenuItem value="Luxury">Luxury</MenuItem>
                  <MenuItem value="Resort">Resort</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="latitude"
                label="Latitude"
                variant="outlined"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
              <TextField
                id="longitude"
                label="Longitude"
                variant="outlined"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
              <TextField
                id="image360"
                label="360 Image URL"
                variant="outlined"
                value={image360}
                onChange={(e) => setImage360(e.target.value)}
              />
            </>
          ) : (
            <>
              <TextField
                id="from"
                label="From"
                variant="outlined"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <TextField
                id="to"
                label="To"
                variant="outlined"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="tripType">Trip Type</InputLabel>
                <Select
                  label="Trip Type"
                  labelId="tripType"
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                >
                  <MenuItem value="One Way">One Way</MenuItem>
                  <MenuItem value="Round Trip">Round Trip</MenuItem>
                </Select>
              </FormControl>
            </>
          )}
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            {...textArea.props}
          />

          {params === "hotel" ? (
            <div className="col-span-2">
              <label htmlFor="image-upload">Upload Images</label>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              <Button
                onClick={handleUpload}
                variant="contained"
                color="success"
              >
                Upload
              </Button>
            </div>
          ) : (
            <div className="col-span-2">
              <label htmlFor="logo-upload">Upload Logo</label>
              <input
                type="file"
                id="logo-upload"
                accept="image/*"
                onChange={handleLogoUpload}
              />
            </div>
          )}
          <div className="col-span-2">
            <Button type="submit" variant="contained" className="!bg-[#002475]">
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AdminForm;
