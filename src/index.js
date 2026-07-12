import { VisualCrossingWebServices } from "./modules/VisualCrossingWeatherData.js";

const data = new VisualCrossingWebServices();

const input = document.querySelector(".input");
const search = document.querySelector(".search");

let city = null;

search.addEventListener("click",()=> {

    city = input.value;
    console.log("test");

    data.fetchWeatherFromCity(city).then(() => {
          console.log(data.getChanceOfRain());
          console.log(data.getDate());
          console.log(data.getForecast());
          console.log(data.getHumidity());
          console.log(data.getPressure());
          console.log(data.getSunriseTime());
          console.log(data.getSunsetTime());
          console.log(data.getTemperature());
          console.log(data.getUvIndex());
          console.log(data.getVisibility());
          console.log(data.getWind());
          console.log("--------");
});
})




