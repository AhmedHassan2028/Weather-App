const KEY = '73ab7f7379ee79434136957f5aca0586'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export const searchWeather = async (query:string) => {
  const response = await fetch(`${BASE_URL}weather?q=${query}&units=metric&APPID=${KEY}`);
  const data = await response.json();
  return data;
}



