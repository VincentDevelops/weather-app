import { Display } from "./Display.js";

export class CurrentConditionsDisplay extends Display {
  constructor(weatherData, elements) {
    super(weatherData);
    this.tempType = "F";

    this.location = elements.location;
    this.dateTimeElement = elements.date;
    this.tempElement = elements.temperature;
    this.conditionElement = elements.condition;
    this.feelsLikeElement = elements.feelsLike;
    this.humidityElement = elements.humidity;
    this.windElement = elements.wind;
    this.pressureElement = elements.pressure;
    this.visibilityElement = elements.visibility;
    this.uvIndexElement = elements.uvIndex;
    this.iconElement = elements.icon;
    this.backgroundElement = elements.background;
    console.log(this.iconElement);
  }

  async update() {
    this.location.textContent = this.weatherData.getLocation();
    this.dateTimeElement.textContent = this.weatherData.getDate();
    this.conditionElement.textContent = this.weatherData.getCondition();
    this.humidityElement.textContent = this.weatherData.getHumidity() + "%";
    this.windElement.textContent = this.weatherData.getWind() + "mph";
    this.pressureElement.textContent = this.weatherData.getPressure();
    this.visibilityElement.textContent =
      this.weatherData.getVisibility() + "mi";
    this.uvIndexElement.textContent = this.weatherData.getUvIndex();

    let temp = this.weatherData.getTemperature();

    if (this.tempType === "F") {
      this.tempElement.textContent = this.weatherData.getTemperature() + "°";
      this.feelsLikeElement.textContent =
        "Feels like " + this.weatherData.getFeelsLike() + "°";
    } else {
      temp = this.weatherData.getTemperature();
      temp = Number(temp);
      temp = (temp - 32) * (5 / 9);
      temp = Math.trunc(temp);
      this.tempElement.textContent = temp + "°";
      this.feelsLikeElement.textContent = "Feels like " + temp + "°";
    }

    const iconName = this.weatherData.getIcon();

    try {
      const iconModule = await import(
        `../assets/weather-icons/${iconName}.svg`
      );

      this.iconElement.src = iconModule.default;
    } catch (error) {
      throw new Error(error);
    }
  }

  changeDegreeType() {
    if (this.tempType === "F") this.tempType = "C";
    else this.tempType = "F";
    this.update();
  }

  displayToConsole() {
    console.log("Current Conditions");
    console.log("City:", this.weatherData.getLocation());
    console.log("Date:", this.weatherData.getDate());
    console.log("Temperature:", this.weatherData.getTemperature());
    console.log("Condition:", this.weatherData.getCondition());
    console.log("Feels Like:", this.weatherData.getFeelsLike());
    console.log("Humidity:", this.weatherData.getHumidity());
    console.log("Wind:", this.weatherData.getWind());
    console.log("Pressure:", this.weatherData.getPressure());
    console.log("Visibility:", this.weatherData.getVisibility());
    console.log("UV Index:", this.weatherData.getUvIndex());
    console.log("Icon:", this.weatherData.getIcon());
  }
}
