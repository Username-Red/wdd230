const currentTemp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');
// const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=4f3b6ca284c383b4bbd8fbd38d58c9a0";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=4f3b6ca284c383b4bbd8fbd38d58c9a0";


async function apiFetch() {
    try {
      const response = await fetch(url);
      const forecastResponse = await fetch(forecasturl);

      if (response.ok && forecastResponse.ok) {
        const data = await response.json();
        const forecastData = await forecastResponse.json();
        console.log(data); // this is for testing the call
        console.log(forecastData)
        loadCondition(data);
        displayResults(data);
        // displaySpeed(data);
        loadHumidity(data)
        forecast(forecastData);

        
        
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}




function  displayResults(weatherData) {
    currentTemp.innerHTML = `<p>Temperature: ${weatherData.main.temp.toFixed(0)}&degF</p>`;
  
    // const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    // const desc = weatherData.weather[0].description;
  
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc);
    
}

function loadCondition(weatherData) {
  document.querySelector(".condition").innerHTML = `<p>Condition: ${weatherData.weather[0].description}</p>`;
}

function displaySpeed(weatherData) {
  document.getElementsByClassName("speed")[0].innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`
} 

function loadHumidity(weatherData) {
  document.querySelector(".humidity-box").innerHTML = `<p>Humidity: ${weatherData.main.humidity}</p>`;
}

function forecast(forecastData) {
  
    for(i = 0; i < 3; i++) {
      var forecastTemp = forecastData.list[i].main.temp;
      const forecastInfo = document.createElement('p');
      forecastInfo.textContent = `Day ${i+1}: ${forecastTemp}${String.fromCharCode(176)}`;
      document.querySelector('.forecast-box').appendChild(forecastInfo);
    }
}

  
apiFetch();