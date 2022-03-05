const API_KEY = `36d4014a291f992e31a2c0e7cfd06195`;

const searchTemp = () => 
{
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data.name));
}
const displayTemp = (data) => 
{
    console.log(data);
}
