import inquirer from "inquirer";
import { getCoordinates } from "./locator.js";
import { getWeather, formatWeather } from "./weather.js";

const prompt = {
    name: 'location',
    message: 'Enter a city name or zip code:'
};

let location = "";

console.log("Welcome to the weather app. Enter a city name or zip code to receive weather data for that location.");

inquirer
    .prompt([
        prompt
    ])
    .then((answers) => {
        location = answers.location;
        return getCoordinates(location);
    })
    .then((coordinates) => {
        return getWeather(coordinates.lat, coordinates.lng);
    })
    .then((data) => {
        const formattedWeather = formatWeather(data);
        console.log(`Current weather in ${location}:\n${formattedWeather}`);
    })