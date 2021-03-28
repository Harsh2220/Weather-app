var con = document.getElementById("container");
var temp = document.getElementById("temp");
var city = document.getElementById("city");
var wind = document.getElementById("wind");
var weather = document.getElementById("weather");
var img = document.getElementById("img");

function success(position) {

    let long = position.coords.longitude;
    let lat = position.coords.latitude;

    console.log(long);
    console.log(lat);

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&" + "lon=" + long + "&appid=9b00f14e85589297f2369ded9c6b8c57";

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);

        let City = data.name;
        let Country = data.sys.country;
        city.innerText = City + "," + Country;

        let Temp = data.main.temp;
        temp.innerText = Math.floor(Temp - 273.15) + "\u00B0C";

        let Wind = data.wind.speed;
        wind.innerText = Wind + "Km/h";

        let Weather = data.weather[0]["description"];
        weather.innerText = Weather;

        let icon = data.weather[0]["icon"];
        img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" + icon + ".svg";

    })
}

function error() {
    alert("Please Turn On Your Location");
}

window.addEventListener('load', function location() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(success,error);

    }
})
