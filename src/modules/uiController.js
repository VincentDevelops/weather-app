import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay.js";
import { ForecastDisplay } from "./ForecastDisplay.js";
import { HighlightsDisplay } from "./HighlightsDisplay.js";
import { VisualCrossingWeatherData } from "./VisualCrossingWeatherData.js";

export const uiController = (() => {
  const weatherData = new VisualCrossingWeatherData();

  const currentConditionsElements = {
    location: document.querySelector(".current-display__header__location"),
    date: document.querySelector(".current-display__header__date-time"),
    icon: document.querySelector(".current-display__main-image"),
    temperature: document.querySelector(
      ".current-display__main__temp-status__temp",
    ),
    condition: document.querySelector(
      ".current-display__main__temp-status__description__condition",
    ),
    feelsLike: document.querySelector(
      ".current-display__main__temp-status__description__feels-like",
    ),
    humidity: document.querySelector(".current-display__day-status__humidity"),
    wind: document.querySelector(".current-display__day-status__wind"),
    pressure: document.querySelector(".current-display__day-status__pressure"),
    visibility: document.querySelector(
      ".current-display__day-status__visibility",
    ),
    uvIndex: document.querySelector(".current-display__day-status__uvindex"),
  };

  const forecastElements = Array.from(
    document.getElementsByClassName("forecast__cards__card"),
  );

  const highlightsElements = {
    sunrise: document.querySelector(".highlights__cards__card__sunrise__time"),
    sunset: document.querySelector(".highlights__cards__card__sunset__time"),
    rain: document.querySelector(".highlights__cards__card__rain__percentage"),
    uvIndex: document.querySelector(".highlights__cards__card__UV__index"),
  };

  const searchWrapper = document.querySelector(".nav__search-wrapper");
  const searchInput = document.querySelector(".nav__search-input");
  const searchButton = document.querySelector(".nav__search-button");
  const tempButton = document.querySelector(".nav__temp-type-button");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    search();
  });
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") search();
  });

  function initialize() {
    const currentConditionsDisplay = new CurrentConditionsDisplay(
      weatherData,
      currentConditionsElements,
    );
    const forecastDisplay = new ForecastDisplay(weatherData, forecastElements);
    const highlightsDisplay = new HighlightsDisplay(
      weatherData,
      highlightsElements,
    );

    weatherData.registerObserver(currentConditionsDisplay);
    weatherData.registerObserver(forecastDisplay);
    weatherData.registerObserver(highlightsDisplay);
    tempButton.addEventListener("click", () => {
      currentConditionsDisplay.changeDegreeType();
      forecastDisplay.changeDegreeType();
    });

    searchCity("Los Angeles");
  }

  function search() {
    const city = searchInput.value;
    searchInput.blur();
    initLoading();
    searchCity(city);
  }

  function searchCity(city) {
    if (city === "" || city.trim() === "" || city === null) {
      console.log("no city entered");
      initError();
      return;
    }

    weatherData
      .fetchWeatherFromCity(city)
      .then(() => {
        try {
          weatherData.notifyObservers();
          initSuccess();
        } catch (error) {
          initError();
          console.log(error);
        }
      })
      .catch((error) => {
        console.log("WE GOT AN ERROR IN HERE");
        console.log(error);
        initError();
      });
  }

  function initLoading() {
    searchWrapper.classList.remove("nav__search__wrapper-error");
    searchWrapper.classList.remove("nav__search__wrapper-success");

    searchWrapper.classList.add("nav__search__wrapper-loading");
  }

  function initError() {
    searchWrapper.classList.remove("nav__search__wrapper-loading");
    searchWrapper.classList.remove("nav__search__wrapper-success");
    searchWrapper.classList.add("nav__search__wrapper-error");
    setTimeout(() => {
      searchWrapper.classList.remove("nav__search__wrapper-error");
    }, 1500);
  }

  function initSuccess() {
    searchWrapper.classList.remove("nav__search__wrapper-loading");
    searchWrapper.classList.remove("nav__search__wrapper-error");
    searchWrapper.classList.add("nav__search__wrapper-success");
    searchInput.value = "";
    setTimeout(() => {
      searchWrapper.classList.remove("nav__search__wrapper-success");
    }, 1500);
  }

  return {
    initialize,
  };
})();
