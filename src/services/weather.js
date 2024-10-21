
async function getWeather(query) {
  const apiKey = localStorage.getItem('apiKey');

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=`;

  const api = `${baseUrl}${apiKey}&q=${query}&units=metric`;

  return await fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      return response;
    })
    .then((data) => {
      return data.json(); // Parse JSON data
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getWeather;
