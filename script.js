
/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
 
	
   
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value

  // CODE GOES HERE
  
  const data = await getWeatherData(city)
  showWeatherData(data)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const getWeatherData = (city) => {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`)
    .then(response => response.json())
	.then(data => data)
	.catch(err => console.error(err));
    //CODE GOES HERE
  
}
const showWeatherData = (weatherData) => {
    console.log(weatherData)
    const temp = document.getElementById('temp')
    const cityName = document.getElementById('city-name')
const weatherType = document.getElementById('weather-type')

const minTemp = document.getElementById('min-temp')
const maxTemp = document.getElementById('max-temp')
    temp.innerText = weatherData.main.temp
    cityName.innerText = weatherData.name
    weatherType.innerText = weatherData.weather[0].main
    minTemp.innerText = weatherData.main.temp_min
    maxTemp.innerText = weatherData.main.temp_max
}

