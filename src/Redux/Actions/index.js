import axios from "axios";
import Swal from "sweetalert2";

export const fetchCity = (data) => {
  return {
    type: "FETCH_CITY",
    payload: data,
  };
};
export const fetchCityDes = (data) => {
  return {
    type: "FETCH_CITY_DES",
    payload: data,
  };
};

export const fetchName = (data) => {
  return {
    type: "FETCH_NAME",
    payload: data,
  };
};

export const fetchApi = (city) => {
  return function (dispatch) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=30dc6ac6c297e4f3357bf14684ef5dc7`
      )

      .then((res) => {
        dispatch(fetchCity(res.data.main));
        dispatch(fetchCityDes(res.data.weather[0].description));
        dispatch(fetchName(res.data.name));

        console.log(res.data);
        console.log(res.data.name);
        console.log(res.data.weather[0].description);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.message);
        Swal.fire(error.response.data.message);
      });
  };
};
