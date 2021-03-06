const API_KEY = `36d4014a291f992e31a2c0e7cfd06195`;

const searchTemp = () => 
{
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
        document.getElementById('city-input').value = '';
}
const setInnerText = (id, cityText) =>
{
    document.getElementById(id).innerText = cityText;
}

const displayTemp = (data) => 
{
    setInnerText('city-name', data.name);
    setInnerText('show-temp', data.main.temp);
    setInnerText('weather-type', data.weather[0].main);
    const conditionUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    
    imgIcon.setAttribute('src', conditionUrl);
}
