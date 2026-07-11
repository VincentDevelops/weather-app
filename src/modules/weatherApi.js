const VISUAL_CROSSING_KEY = "7VLVREEC3H5CBE55XZYG5THLB";

export async function fetchWeatherFromCity(city) {
  try {
    if (city === null || city.trim() === null) throw new Error("Empty search");

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${VISUAL_CROSSING_KEY}`,
    );

    if (response.error)
      throw new Error(
        "Network Error: Could not connect to Visual Crossing API",
      );

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchWeatherFromCity("london");
