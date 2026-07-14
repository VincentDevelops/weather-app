import { Display } from "./Display.js";

export class ForecastDisplay extends Display {
  constructor(weatherData, elements) {
    super(weatherData);
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
      this.maxTempElements[i].textContent = forecast[i].tempmax + "°";
      this.minTempElements[i].textContent = forecast[i].tempmin + "°";
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
