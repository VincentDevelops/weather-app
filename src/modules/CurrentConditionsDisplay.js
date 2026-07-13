import { Display } from "./Display.js";

export class CurrendConditionsDisplay extends Display {
  constructor(weatherData, elements) {
    super(weatherData);

    // this.cityNameElement = elements.cityName;
    // this.dateTimeElement = elements.dateTime;
    // this.tempElement = elements.temp;
    // this.conditionElement = elements.condition;
    // this.feelsLikeElement = elements.feelsLike;
    // this.humidityElement = elements.humidity;
    // this.windElement = elements.wind;
    // this.pressureElement = elements.pressure;
    // this.visibilityElement = elements.visibility;
    // this.uvIndexElement = elements.uvIndex;
  }

  update() {
    // this.cityNameElement.textContent = this.weatherData.getCityName();
    // this.dateElement.textContent = this.weatherData.getDateTime();
    // this.tempElement.textContent = this.weatherData.getTemperature();
    // this.conditionElement.textContent = this.weatherData.getCondition();
    // this.feelsLikeElement.textContent = this.weatherData.getFeelsLike();
    // this.humidityElement.textContent = this.weatherData.getHumidity();
    // this.windElement.textContent = this.weatherData.getWind();
    // this.pressureElement.textContent = this.weatherData.getPressure();
    // this.visibilityElement.textContent = this.weatherData.getVisibility();
    // this.uvIndexElement.textContent = this.weatherData.getUvIndex();
    this.displayToConsole();
  }

  displayToConsole() {
    console.log("Current Conditions");
    // console.log("City:", this.weatherData.getCityName());
    console.log("Date:", this.weatherData.getDate());
    console.log("Temperature:", this.weatherData.getTemperature());
    console.log("Condition:", this.weatherData.getCondition());
    console.log("Feels Like:", this.weatherData.getFeelsLike());
    console.log("Humidity:", this.weatherData.getHumidity());
    console.log("Wind:", this.weatherData.getWind());
    console.log("Pressure:", this.weatherData.getPressure());
    console.log("Visibility:", this.weatherData.getVisibility());
    console.log("UV Index:", this.weatherData.getUvIndex());
  }
}
