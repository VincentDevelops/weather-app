import { Subject } from "./Subject.js";

//psuedo interface
export class WeatherData extends Subject {

  constructor() {
    super();
    this.data = null;
    this.key;
    this.temperature;
    this.humidity;
    this.pressure;
    this.visibility;
    this.uvIndex;
    this.forecast;
    this.sunriseTime;
    this.sunsetTime;
    this.chanceOfRain;
  }

  registerObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }

  getTemperature() {
    throw new Error("WeatherData.getTemperature not defined");
  }

  getHumidity() {
    throw new Error("WeatherData.getHumidity not defined");
  }

  getWind() {
    throw new Error("WeatherData.getWind not defined");
  }

  getPressure() {
    throw new Error("WeatherData.getPressure not defined");
  }

  getVisibility() {
    throw new Error("WeatherData.getVisibility not defined");
  }

  getUvIndex() {
    throw new Error("WeatherData.getVisibility not defined");
  }

  getForecast() {
    throw new Error("WeatherData.getForecast not defined");
  }

  getSunriseTime() {
    throw new Error("WeatherData.getSunriseTime not defined");
  }

  getSunsetTime() {
    throw new Error("WeatherData.getSunsetTime not defined");  
  }

  getChanceOfRain() {
    throw new Error("WeatherData.getChanceOfRain not defined");
  }

  getDate() {
    throw new Error("WeatherData.getDate not defined");
  }

  async fetchWeatherFromCity() {
    throw new Error("WeatherData.fetchWeatherFromcity not defined");
  }

}

