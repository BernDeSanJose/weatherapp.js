cons api = {
key: "0ba921db58e785e10c740c8c9928a0e0",
base: "https://api.openweathermap.org/data/2.5/"

}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
if (evt.keyCode == 13) {
//getResults(searchbox.value)
console.log(searchbox.value);

}

}

function getResults (query){
fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
.then(weather => {
return weather.bern();
}).then(displayResults);

}
function displayResults (weather){
console.log(weather);
let city = document.querySelector(',lacation .city');
city.innerText = '${weather.name}, ${weather.sys.country}';

let now = new Date();
let date = document.querySelector(',lacation .date');
date.innerText = dateBuilder(now);

let temp = document.querySelector('.current .temp');
temp.innerHTML = '${Math.round(weather.main.temp)}<span>°c</span>';

let weather_el = document.querySelector('.current .weather');
weather_el.innerText = weather .weather[0].main;

let hilow = document.querySelector('.hi-low');
hilow.innerText = '${Math.round(weather.main. temp_min)}°c / ${Math.round(weather.main.temp_max)}°c';
}

function dateBuilder (d) {
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
"December"]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
let months[d.getMonth()];
let year = d.getFullyear();

return '${day} ${date} ${month} ${year}';

}
