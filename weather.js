// ===== WEATHER MODULE =====
async function loadWeather() {
    const apiKey = "PUT_API_KEY_HERE";

    const lat = 38.8462;
    const lon = -77.3064;

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );

        const data = await res.json();

        const today = data.list[0];
        const temp = Math.round(today.main.temp);
        const desc = today.weather[0].description;

        document.getElementById("weatherText").innerHTML =
            `🌡️ ${temp}°F<br>☁️ ${desc}`;

    } catch {
        document.getElementById("weatherText").innerText =
            "Weather unavailable.";
    }
}
