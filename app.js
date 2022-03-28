const currentTemp = document.getElementById("temp");
const cityName = document.getElementById("cityName");
const feelsLike = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const minTemp = document.getElementById("min_temp");
const maxTemp = document.getElementById("max_temp");
const statusImg = document.getElementById("status");
const desc = document.getElementById("desc");

const getWeather = async (apiKey, city) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
		);
		let data = await res.json();
		console.log(data);
		currentTemp.textContent = `${data.main.temp} °C`;
		cityName.innerText = `${data.name}, ${data.sys.country}`;
		feelsLike.textContent = `Feels Like : ${data.main.feels_like} °C`;
		humidity.textContent = `Humidity : ${data.main.humidity}%`;
		minTemp.textContent = `${data.main.temp_min} °C`;
		maxTemp.textContent = `${data.main.temp_max} °C`;
		statusImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
		desc.textContent = `${data.weather[0].description}`;
	} catch (err) {
		alert("Please enter a valid city name");
	}
};

const SuperSecretAPIKey = "31f87520d0472a687c7d90d468ec57ac";

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
	e.preventDefault();
	let city = document.getElementById("city").value;
	getWeather(SuperSecretAPIKey, city);
});
