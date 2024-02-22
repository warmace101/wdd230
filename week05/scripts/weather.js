
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const latitude = '49.76';
const longitude = '6.64';

const apiKey = '919a5d9457aecf0d64bfe51846d18c6e';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      
      console.log(data);

      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayResults(data) {
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const weatherIconCode = data.weather[0].icon;

  currentTemp.textContent = `${temperature} °F`;

  weatherIcon.src = `https://openweathermap.org/img/w/${weatherIconCode}.png`;
  weatherIcon.alt = weatherDescription;

  captionDesc.textContent = weatherDescription;
}

apiFetch();

