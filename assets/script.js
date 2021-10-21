function start () {
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=84.3880&appid=2ddb29b84cb184c847be931b29dae834&units=imperial")
    .then(function (repsonse) {
        return repsonse.json()
    })
    .then(function (data) {
        console.log(data);
    
    // let date = document.querySelector(".location-date")
    // date.textContent = data.timezone
    let timer = moment().format("LLLL");
    $("location-date").text(timer);
    let temp = document.querySelector(".temp")
    temp.textContent = "Temp: "+ data.current.temp + "°"
    let wind = document.querySelector(".wind")
    wind.textContent = "Wind: " + data.current.wind_speed + " MPH"
    let humidity = document.querySelector(".humidity")
    humidity.textContent = "Humidity: " + data.current.humidity + "%"
    let uvIndex = document.querySelector(".UV-Index")
    uvIndex.textContent = "UV Index: " + data.current.uvi

    // let date = document.querySelector(".date")
    // date.textContent = "Date: " 
    let temp2 = document.querySelector(".temp2")
    temp2.textContent = "Temp: "+ data.daily[0].temp.day + "°"
    let wind2 = document.querySelector(".wind2")
    wind2.textContent = "Wind: " + data.daily[0].wind_speed + " MPH"
    let humidity2 = document.querySelector(".humidity2")
    humidity2.textContent = "Humidity: " + data.daily[0].humidity + "%"
    let uvIndex2 = document.querySelector(".UV-Index2")
    uvIndex2.textContent = "UV Index: " + data.daily[0].uvi

    let temp3 = document.querySelector(".temp3")
    temp3.textContent = "Temp: "+ data.daily[1].temp.day + "°"
    let wind3 = document.querySelector(".wind3")
    wind3.textContent = "Wind: " + data.daily[1].wind_speed + " MPH"
    let humidity3 = document.querySelector(".humidity3")
    humidity3.textContent = "Humidity: " + data.daily[1].humidity + "%"
    let uvIndex3 = document.querySelector(".UV-Index3")
    uvIndex3.textContent = "UV Index: " + data.daily[1].uvi
    
    let temp4 = document.querySelector(".temp4")
    temp4.textContent = "Temp: "+ data.daily[2].temp.day + "°"
    let wind4 = document.querySelector(".wind4")
    wind4.textContent = "Wind: " + data.daily[2].wind_speed + " MPH"
    let humidity4 = document.querySelector(".humidity4")
    humidity4.textContent = "Humidity: " + data.daily[2].humidity + "%"
    let uvIndex4 = document.querySelector(".UV-Index4")
    uvIndex4.textContent = "UV Index: " + data.daily[2].uvi

    let temp5 = document.querySelector(".temp5")
    temp5.textContent = "Temp: "+ data.daily[3].temp.day + "°"
    let wind5 = document.querySelector(".wind5")
    wind5.textContent = "Wind: " + data.daily[3].wind_speed + " MPH"
    let humidity5 = document.querySelector(".humidity5")
    humidity5.textContent = "Humidity: " + data.daily[3].humidity + "%"
    let uvIndex5 = document.querySelector(".UV-Index5")
    uvIndex5.textContent = "UV Index: " + data.daily[3].uvi

    // let time6 = document.querySelector(".time6")
    // time6.textContent = "Time " + data
    let temp6 = document.querySelector(".temp6")
    temp6.textContent = "Temp: "+ data.daily[4].temp.day + "°"
    let wind6 = document.querySelector(".wind6")
    wind6.textContent = "Wind: " + data.daily[4].wind_speed + " MPH"
    let humidity6 = document.querySelector(".humidity6")
    humidity6.textContent = "Humidity: " + data.daily[4].humidity + "%"
    let uvIndex6 = document.querySelector(".UV-Index6")
    uvIndex6.textContent = "UV Index: " + data.daily[4].uvi
    });



// let timer = moment().format("LLLL");
// $("location-date").text(timer);





}
start()

// let searchBox = document.querySelector(".search-box");
// let submitButton = document.querySelector(".submit-button")
// submitButton.addEventListener("onclick");






// let searchBox = document.querySelector(".search-box");
// searchBox.addEventListener("keypress", setQuery);

// function setQuery(evt) {
//     if (evt.keyCode == 13) {
//         getResult(searchBox.value);
//         console.log(searchBox.value);
//     }
// }

