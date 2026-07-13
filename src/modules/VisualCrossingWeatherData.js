import { WeatherData } from "./WeatherData.js";

export class VisualCrossingWebServices extends WeatherData {
  constructor() {
    super();
    this.VISUAL_CROSSING_KEY = "7VLVREEC3H5CBE55XZYG5THLB";
  }

  async fetchWeatherFromCity(city) {
    try {
      if (city === null || city.trim() === "") throw new Error("Empty search");

      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${this.VISUAL_CROSSING_KEY}`,
      );

      if (response.error) {
        throw new Error(
          "Network Error: Could not connect to Visual Crossing API",
        );
      }

      this.data = await response.json();

      console.log(this.data);

      return this.data;
    } catch (error) {
      console.log(error);
    }
  }

  getTemperature() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.temp;
  }

  getCondition() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.conditions;
  }

  getFeelsLike() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.feelslike;
  }

  getHumidity() {
    if (this.data === null) {
      throw Error("data not initialized");
    }
    return this.data.currentConditions.humidity;
  }

  getWind() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.windspeed;
  }

  getPressure() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.pressure;
  }

  getVisibility() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.visibility;
  }

  getUvIndex() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.uvindex;
  }

  getForecast() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.days;
  }

  getSunriseTime() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.sunrise;
  }

  getSunsetTime() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.sunset;
  }

  getChanceOfRain() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.precipprob;
  }

  getDate() {
    return new Date();
  }
}
