import "./styles/modern-normalize.css";
import "./styles/style.css";
import { CurrendConditionsDisplay } from "./modules/CurrentConditionsDisplay.js";
import { ForecastDisplay } from "./modules/ForecastDisplay.js";
import { HighlightsDisplay } from "./modules/HighlightsDisplay.js";
import { VisualCrossingWeatherData } from "./modules/VisualCrossingWeatherData.js";
import { uiController } from "./modules/uiController.js";

uiController.initialize();
