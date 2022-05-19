import cities from "cities.json";

export const getCoords = (city) => {
  const myCity = cities.filter(
    (c) => c.name.toLowerCase() === city.toLowerCase()
  );
  if (!myCity[0]) return { message: "City not found" };
  return { lat: myCity[0].lat, lng: myCity[0].lng };
};
