import { Display } from "./Display.js";

export class ForecastDisplay extends Display {
  constructor(weatherData, elements) {
    super(weatherData);
    this.tempType = "F";

    this.elements = elements;
    this.iconElements = elements.map((card) =>
      card.querySelector(".forecast__card__img"),
    );
    this.maxTempElements = elements.map((card) =>
      card.querySelector(".forecast__cards__card__max-temp"),
    );
    this.minTempElements = elements.map((card) =>
      card.querySelector(".forecast__cards__card__min-temp"),
    );
    this.dayNameElements = elements.map((card) =>
      card.querySelector(".forecast__cards__card__day"),
    );

    this.dayDateElements = elements.map((card) =>
      card.querySelector(".forecast__cards__card__date"),
    );
  }

  async update() {
    const forecast = this.weatherData.getForecast();
    for (let i = 0; i < Math.min(7, this.elements.length); i++) {
      let tempMax = forecast[i].tempmax;
      let tempMin = forecast[i].tempmin;

      if (this.tempType === "F") {
        this.maxTempElements[i].textContent = forecast[i].tempmax + "°";
        this.minTempElements[i].textContent = forecast[i].tempmin + "°";
      } else {
        tempMax = this.convertToC(tempMax);
        tempMin = this.convertToC(tempMin);
        this.maxTempElements[i].textContent = tempMax + "°";
        this.minTempElements[i].textContent = tempMin + "°";
      }

      const date = new Date(`${forecast[i].datetime}T00:00:00`);
      this.dayNameElements[i].textContent = date.toLocaleDateString("en-US", {
        weekday: "short",
      });

      this.dayDateElements[i].textContent = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      try {
        const iconName = forecast[i].icon;

        const iconModule = await import(
          `../assets/weather-icons/${iconName}.svg`
        );

        this.iconElements[i].src = iconModule.default;
        this.iconElements[i].classList.remove("hide");
      } catch (error) {
        console.log(error);
        this.iconElements[i].classList.add("hide");
      }
    }
  }

  convertToC(value) {
    value = Number(value);
    value = (value - 32) * (5 / 9);
    value = Math.trunc(value * 10) / 10;
    return value;
  }

  changeDegreeType() {
    if (this.tempType === "F") this.tempType = "C";
    else this.tempType = "F";
    this.update();
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
