import { Display } from "./Display.js";

export class HighlightsDisplay extends Display {
  constructor(weatherData, elements) {
    super(weatherData);

    this.sunriseTimeElement = elements.sunrise;
    this.sunsetTimeElement = elements.sunset;
    this.chanceOfRainElement = elements.rain;
    this.uvIndexElement = elements.uvIndex;
  }

  update() {
    this.sunriseTimeElement.textContent = this.formatTime(
      this.weatherData.getSunriseTime(),
    );
    this.sunsetTimeElement.textContent = this.formatTime(
      this.weatherData.getSunsetTime(),
    );
    this.chanceOfRainElement.textContent =
      this.weatherData.getChanceOfRain() + "%";
    this.uvIndexElement.textContent = this.weatherData.getUvIndex();
  }

  displayToConsole() {
    console.log("Weather Highlights");
    console.log("Sunrise Time:", this.weatherData.getTimeEpoch());
    console.log("Sunset Time:", this.weatherData.getSunsetTime());
    console.log("Chance of Rain:", this.weatherData.getChanceOfRain());
    console.log("UV Index:", this.weatherData.getUvIndex());
  }

  formatTime(time) {
    const [hours, minutes] = time.split(":").map(Number);

    const period = hours >= 12 ? "PM" : "AM";
    const normalHours = hours % 12 || 12;

    return `${normalHours}:${minutes.toString().padStart(2, "0")}${period}`;
  }
}
