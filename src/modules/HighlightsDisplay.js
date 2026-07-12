import { Display } from "./Display";

export class HighlightsDisplay extends Display {
    constructor(WeatherData) {
        super(WeatherData);
    }

    init() {
        if (this.WeatherData == null)
            throw new Error("HighlightsDisplay.WeatherData properties null");

        
    }
}