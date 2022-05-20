import axios from "axios";
import { apiKey } from "../main";
import { getCoords } from "./cities";

export const getWeatherFromCity = async (city) => {
  const coords = await getCoords(city);
  if (coords.message) return coords.message;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
