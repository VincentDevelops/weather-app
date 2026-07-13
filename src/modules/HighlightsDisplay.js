import { Display } from "./Display.js";

export class HighlightsDisplay extends Display {
  constructor(weatherData, elements) {
    super(weatherData);

    // this.sunriseTimeElement = elements.sunriseTime;
    // this.sunsetTimeElement = elements.sunsetTime;
    // this.chanceOfRainElement = elements.chanceOfRain;
    // this.uvIndexElement = elements.uvIndex;
  }

  update() {
    // this.sunriseTimeElement.textContent = this.weatherData.getSunriseTime();
    // this.sunsetTimeElement.textContent = this.weatherData.getSunsetTime();
    // this.chanceOfRainElement.textContent = this.weatherData.getChanceOfRain();
    // this.uvIndexElement.textContent = this.weatherData.getUvIndex();

    this.displayToConsole();
  }

  displayToConsole() {
    console.log("Weather Highlights");
    console.log("Sunrise Time:", this.weatherData.getSunriseTime());
    console.log("Sunset Time:", this.weatherData.getSunsetTime());
    console.log("Chance of Rain:", this.weatherData.getChanceOfRain());
    console.log("UV Index:", this.weatherData.getUvIndex());
  }
}
