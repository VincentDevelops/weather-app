import "./styles/modern-normalize.css";
import "./styles/style.css";
import { CurrendConditionsDisplay } from "./modules/CurrentConditionsDisplay.js";
import { ForecastDisplay } from "./modules/ForecastDisplay.js";
import { HighlightsDisplay } from "./modules/HighlightsDisplay.js";
import { VisualCrossingWeatherData } from "./modules/VisualCrossingWeatherData.js";
import { uiController } from "./modules/uiController.js";

// const data = new VisualCrossingWeatherData();

// const input = document.querySelector(".input");
// const search = document.querySelector(".search");

// let city = null;
// const currentConditionsDisplay = new CurrendConditionsDisplay(data);
// const highlightsDisplay = new HighlightsDisplay(data);
// const forecastDisplay = new ForecastDisplay(data);

// data.registerObserver(currentConditionsDisplay);
// data.registerObserver(highlightsDisplay);
// data.registerObserver(forecastDisplay);

// search.addEventListener("click", () => {
//   city = input.value;
//   console.log("test");

//   if (city === "" || city.trim === "" || city === null) {
//     console.log("no city entered");
//     return;
//   }

//   data
//     .fetchWeatherFromCity(city)
//     .then(() => {
//       data.notifyObservers();
//     })
//     .catch((error) => {
//       console.log("WE GOT AN ERROR IN HERE");
//       console.log(error);
//     });
// });

uiController.initialize();
