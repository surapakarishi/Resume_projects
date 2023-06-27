const initialState = {
  cityData: [],
  weather: [],
  Name: "",
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "FETCH_CITY") {
    return {
      ...state,
      cityData: action.payload,
    };
  } else if (action.type === "FETCH_CITY_DES") {
    return {
      ...state,
      weather: action.payload,
    };
  } else if (action.type === "FETCH_NAME") {
    return {
      ...state,
      Name: action.payload,
    };
  }

  return state;
};
