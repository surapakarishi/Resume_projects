import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../Redux/Actions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import Swal from "sweetalert2";

import "../index.css";
import { Typography } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

const Display = () => {
  const [cityName, setCityName] = useState("");
  const State = useSelector((state) => state.cityData);
  const weather = useSelector((state) => state.weather);
  const name = useSelector((state) => state.Name);

  console.log(State);
  console.log(weather);
  console.log(name);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityName === "") {
      Swal.fire("Please enter City name");
    } else if (cityName) {
      dispatch(fetchApi(cityName));
      setCityName("");
    } else {
      alert("city doesnt exist");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 0,
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 720,
          },
        }}
      >
        <Paper elevation={10} className="Paper">
          <Typography variant="h4" color="ActiveBorder" mt={4}>
            How's the weather today?
          </Typography>
          <TextField
            id="filled-basic"
            variant="standard"
            color="success"
            size="medium"
            sx={{ marginTop: 5, fontSize: 20 }}
            type="search"
            name="city"
            value={cityName}
            placeholder="Enter City "
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          />
          &nbsp;
          <SearchRoundedIcon
            onClick={handleSearch}
            sx={{ fontSize: 35, marginTop: 5 }}
          />
          <Typography variant="h2" color="black" mt={1}>
            <LocationCityIcon sx={{ fontSize: 30, marginTop: 5 }} />
            {name}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: 150 }} color="black" mb={1}>
            <DeviceThermostatIcon sx={{ fontSize: 70, marginTop: 1 }} />
            {parseInt(State.temp)}
            <sup>o</sup>
          </Typography>
          <CloudQueueIcon sx={{ fontSize: 70 }} />
          <Typography variant="h4" color="black" sx={{ fontSize: 40 }}>
            {weather}
          </Typography>
          <Typography
            variant="h4"
            color="ActiveBorder"
            sx={{ fontSize: 40, marginTop: 4 }}
          >
            H:{(State.temp_max)}
            <sup>o</sup> &nbsp; &nbsp; &nbsp; &nbsp; L:
            {(State.temp_min)}
            <sup>o</sup>
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Display;
