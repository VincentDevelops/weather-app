import { Display } from "./Display.js";

export class ForecastDisplay extends Display {
  constructor(weatherData, elements) {
    super(weatherData);
    this.elements = elements;
  }

  update() {
    this.displayToConsole();

    // const forecast = this.weatherData.getForecast();
    // for (let i = 0; i < Math.min(7, this.elements.length), i++) {
    //     this.elements[i].forecastDayDate.textContent = forecast[i].datetime;
    //     this.elements[i].forecastTempMax.textContent = forecast[i].tempmax;
    //     this.elements[i].forecastTempMin.textContent = forecast[i].tempmin;
    // }
  }

  displayToConsole() {
    const forecast = this.weatherData.getForecast();

    for (let i = 0; i < Math.min(7, forecast.length); i++) {
      console.log(`${i} days from today`);
      console.log(`date: ${forecast[i].datetime}`);
      console.log(`tempmax: ${forecast[i].tempmax}`);
      console.log(`tempmin: ${forecast[i].tempmin}`);
      console.log(`temp: ${forecast[i].temp}`);
    }
  }
}
