export class Display {
  constructor(weatherData) {
    this.weatherData = weatherData;
  }

  update() {
    throw new Error("Display.init not defined");
  }
}
