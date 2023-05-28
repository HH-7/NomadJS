const API_KEY = "8a4965808fa0e42fd22ff37b9fc7e61a";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.getElementById("weatherIcon");
      const temp = document.getElementById("temp");
      const city = document.getElementById("city");

      const currIcon = data.weather[0].icon.substr(0, 2);
      const currTemp = Math.floor(data.main.temp);
      const currCity = data.name.split("-");
      let WEATHERICONS;

      switch (currIcon) {
        case "01":
          WEATHERICONS = "fas fa-sun";
          break;
        case "02":
          WEATHERICONS = "fas fa-cloud-sun";
          break;
        case "03":
          WEATHERICONS = "fas fa-cloud";
          break;
        case "04":
          WEATHERICONS = "fas fa-cloud-meatball";
          break;
        case "09":
          WEATHERICONS = "fas fa-cloud-sun-rain";
          break;
        case "10":
          WEATHERICONS = "fas fa-cloud-showers-heavy";
          break;
        case "11":
          WEATHERICONS = "fas fa-poo-storm";
          break;
        case "13":
          WEATHERICONS = "fas fa-snowflake";
          break;
        case "50":
          WEATHERICONS = "fas fa-smog";
          break;
      }

      $("#weatherIcon").append('<i class="' + WEATHERICONS + '"></i>');
      temp.innerText = currTemp + "°C";
      city.innerText = currCity[0];
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
