import { WeatherData } from "./WeatherData.js";

export class VisualCrossingWeatherData extends WeatherData {
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

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      this.data = await response.json();

      if (!this.data || !this.data.currentConditions) {
        throw new Error("No weather data found");
      }

      console.log(this.data);

      return this.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  getLocation() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    const sentenceLower = this.data.address.toLowerCase();

    const sentenceProper = sentenceLower
      // split the sentence into words
      .split(" ")
      // split each word into letters; capitalise the first and recombine the rest without a space
      .map(
        ([firstLetter, ...otherLetters]) =>
          `${firstLetter.toUpperCase()}${otherLetters.join("")}`,
      )
      // reform the words into a sentence with spaces in-between
      .join(" ");

    return sentenceProper;
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
    if (this.data === null) {
      throw Error("data not initialized");
    }
    const formattedDate = new Date().toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return formattedDate;
  }

  getIcon() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.icon;
  }

  getTimeEpoch() {
    if (this.data === null) {
      throw Error("data not initialized");
    }

    return this.data.currentConditions.datetimeEpoch;
  }
}
