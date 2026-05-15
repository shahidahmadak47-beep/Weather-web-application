async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},in&lang=hi&units=metric&appid=38a213fc10b1a3dc204a40a8b2687731`)

    console.log(response)
    const data = await response.json()
    console.log(data)
    let weatherData = document.querySelector('#weather-data')
    weatherData.innerHTML = `<div class="icon">
  <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon" />
</div>
<div class="temperature">${data.main.temp}°C</div>
<div class="description">${data.weather[0].description}</div>
<div class="details">
  <div>Feels like: ${data.main.feels_like
        }°C</div>
  <div>Humidity: ${data.main.humidity}%</div>
  <div>Wind speed: ${data.wind.speed} m/s</div>
</div>`
}


const form = document.querySelector('#weather-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let city = document.querySelector('#city-input').value

    if (!city) {
        return alert("Please Enter City Name")
    }

    fetchWeatherData(city)
})