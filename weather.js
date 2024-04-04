export function getWeather(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=be039325621c28d5198fc12a6db6651e&units=imperial`)
        .then(res => res.json())
        .then(data => {
            return data.current;
        });
}

export function formatWeather(data) {
    const {temp, feels_like, weather} = data;
    const description = [];
    for (const w of weather) {
        description.push(w.description);
    }
    const joined = description.join(", ");
    return `temperature: ${temp}\nfeels like: ${feels_like}\nweather: ${joined}`;
}