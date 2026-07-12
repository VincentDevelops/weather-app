export class Display {
    constructor(WeatherData) {
        this.WeatherData = WeatherData;
    }

    init() {
        throw new Error("Display.init not defined");
    }

    update() {
        throw new Error("Display.init not defined");
    }
}