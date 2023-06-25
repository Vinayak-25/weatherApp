const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '54dac54225msh54047b1a8d96dd4p1f9cddjsn7d98ee48b816',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolhapur")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pctL.innerHTML = response.cloud_pct
        tempL.innerHTML = response.temp
        feels_likeL.innerHTML = response.feels_like
        humidityL.innerHTML = response.humidity
        min_tempL.innerHTML = response.min_temp
        max_tempL.innerHTML = response.max_temp
        wind_speedL.innerHTML = response.wind_speed
        wind_degreesL.innerHTML = response.wind_degrees
        sunriseL.innerHTML = response.sunrise
        sunsetL.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pctMum.innerHTML = response.cloud_pct
        tempMum.innerHTML = response.temp
        feels_likeMum.innerHTML = response.feels_like
        humidityMum.innerHTML = response.humidity
        min_tempMum.innerHTML = response.min_temp
        max_tempMum.innerHTML = response.max_temp
        wind_speedMum.innerHTML = response.wind_speed
        wind_degreesMum.innerHTML = response.wind_degrees
        sunriseMum.innerHTML = response.sunrise
        sunsetMum.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pctTokyo.innerHTML = response.cloud_pct
        tempTokyo.innerHTML = response.temp
        feels_likeTokyo.innerHTML = response.feels_like
        humidityTokyo.innerHTML = response.humidity
        min_tempTokyo.innerHTML = response.min_temp
        max_tempTokyo.innerHTML = response.max_temp
        wind_speedTokyo.innerHTML = response.wind_speed
        wind_degreesTokyo.innerHTML = response.wind_degrees
        sunriseTokyo.innerHTML = response.sunrise
        sunsetTokyo.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Berlin', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pctBerl.innerHTML = response.cloud_pct
        tempBerl.innerHTML = response.temp
        feels_likeBerl.innerHTML = response.feels_like
        humidityBerl.innerHTML = response.humidity
        min_tempBerl.innerHTML = response.min_temp
        max_tempBerl.innerHTML = response.max_temp
        wind_speedBerl.innerHTML = response.wind_speed
        wind_degreesBerl.innerHTML = response.wind_degrees
        sunriseBerl.innerHTML = response.sunrise
        sunsetBerl.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pctSyd.innerHTML = response.cloud_pct
        tempSyd.innerHTML = response.temp
        feels_likeSyd.innerHTML = response.feels_like
        humiditySyd.innerHTML = response.humidity
        min_tempSyd.innerHTML = response.min_temp
        max_tempSyd.innerHTML = response.max_temp
        wind_speedSyd.innerHTML = response.wind_speed
        wind_degreesSyd.innerHTML = response.wind_degrees
        sunriseSyd.innerHTML = response.sunrise
        sunsetSyd.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pctNY.innerHTML = response.cloud_pct
        tempNY.innerHTML = response.temp
        feels_likeNY.innerHTML = response.feels_like
        humidityNY.innerHTML = response.humidity
        min_tempNY.innerHTML = response.min_temp
        max_tempNY.innerHTML = response.max_temp
        wind_speedNY.innerHTML = response.wind_speed
        wind_degreesNY.innerHTML = response.wind_degrees
        sunriseNY.innerHTML = response.sunrise
        sunsetNY.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

