function incrementCounter() {
   
    let counter = parseInt(document.getElementById('counter').value);
    
    counter++;
    
    document.getElementById('counter').value = counter;
}


function markAsSeen(button) {
    
    incrementCounter();
}

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items');
const timeszoneE1 = document.getElementById('time-zone');
const countryE1 = document.getElementById('weather-forecast');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const day = ['1 => 31']

const API_KEY ='57850a0d40a85f1cedb0189a3a477fad'

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM' 

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

 }, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`).then(res => res.json()).then(data => {
            showweatherData(data);
        })
    })
}
