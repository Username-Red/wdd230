const currentTemp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');
// const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=4f3b6ca284c383b4bbd8fbd38d58c9a0";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        loadCondition(data);
        displayResults(data);
        displaySpeed(data);
        
        
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<p>Temperature: ${weatherData.main.temp.toFixed(0)}&degF</p>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
}

function loadCondition(weatherData) {
  document.querySelector(".condition").innerHTML = `<p>Condition: ${weatherData.weather[0].description}</p>`;
}

function displaySpeed(weatherData) {
  document.getElementsByClassName("speed")[0].innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`
} 

// function windchill(weatherData) {
//   var temp = weatherData.main.temp;
//   var speed = weatherData.wind.speed;
  
//   if (temp <= 50 && speed >= 3.0) {
//     var f = 35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16);
//     f = Math.round(f);
//     var chill = f.toString();
//     document.getElementsByClassName("chill")[0].textContent = `${chill} &degF`;
// }
// else {
//     document.getElementsByClassName("chill")[0].textContent = "N/A";
// }
// }

  
apiFetch();