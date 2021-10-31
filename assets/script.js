function start() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=2ddb29b84cb184c847be931b29dae834")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            let lat = data.coord.lat
            let lon = data.coord.lon
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=2ddb29b84cb184c847be931b29dae834&units=imperial`)
                .then(function (repsonse) {
                    return repsonse.json()
                })
                .then(function (data) {
                    console.log(data);


                    let timer = document.querySelector(".location-date")
                    timer.textContent = moment().format("L")
                    let weatherImage1 = document.createElement('img')
                    weatherImage1.setAttribute('src', `http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`);
                    let image1 = document.querySelector(".weather-image")
                    image1.append(weatherImage1)
                    let temp = document.querySelector(".temp")
                    temp.textContent = "Temp: " + data.current.temp + "°"
                    let wind = document.querySelector(".wind")
                    wind.textContent = "Wind: " + data.current.wind_speed + " MPH"
                    let humidity = document.querySelector(".humidity")
                    humidity.textContent = "Humidity: " + data.current.humidity + "%"
                    let uvIndex = document.querySelector(".UV-Index")
                    uvIndex.textContent = "UV Index: " + data.current.uvi

                    let date2 = document.querySelector(".date2")
                    date2.textContent = moment().add(1, 'days').format("L")
                    let weatherImage2 = document.createElement('img');
                    weatherImage2.setAttribute('src', `http://openweathermap.org/img/w/${data.daily[0].weather[0].icon}.png`);
                    let image2 = document.querySelector(".weather-image2")
                    image2.append(weatherImage2)
                    let temp2 = document.querySelector(".temp2")
                    temp2.textContent = "Temp: " + data.daily[0].temp.day + "°"
                    let wind2 = document.querySelector(".wind2")
                    wind2.textContent = "Wind: " + data.daily[0].wind_speed + " MPH"
                    let humidity2 = document.querySelector(".humidity2")
                    humidity2.textContent = "Humidity: " + data.daily[0].humidity + "%"
                    let uvIndex2 = document.querySelector(".UV-Index2")
                    uvIndex2.textContent = "UV Index: " + data.daily[0].uvi

                    let date3 = document.querySelector(".date3")
                    date3.textContent = moment().add(2, 'days').format("L")
                    let weatherImage3 = document.createElement('img')
                    weatherImage3.setAttribute('src', `http://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`)
                    let image3 = document.querySelector(".weather-image3")
                    image3.append(weatherImage3)
                    let temp3 = document.querySelector(".temp3")
                    temp3.textContent = "Temp: " + data.daily[1].temp.day + "°"
                    let wind3 = document.querySelector(".wind3")
                    wind3.textContent = "Wind: " + data.daily[1].wind_speed + " MPH"
                    let humidity3 = document.querySelector(".humidity3")
                    humidity3.textContent = "Humidity: " + data.daily[1].humidity + "%"
                    let uvIndex3 = document.querySelector(".UV-Index3")
                    uvIndex3.textContent = "UV Index: " + data.daily[1].uvi

                    let date4 = document.querySelector(".date4")
                    date4.textContent = moment().add(3, 'days').format("L")
                    let weatherImage4 = document.createElement('img')
                    weatherImage4.setAttribute('src', `http://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`)
                    let image4 = document.querySelector(".weather-image4")
                    image4.append(weatherImage4)
                    let temp4 = document.querySelector(".temp4")
                    temp4.textContent = "Temp: " + data.daily[2].temp.day + "°"
                    let wind4 = document.querySelector(".wind4")
                    wind4.textContent = "Wind: " + data.daily[2].wind_speed + " MPH"
                    let humidity4 = document.querySelector(".humidity4")
                    humidity4.textContent = "Humidity: " + data.daily[2].humidity + "%"
                    let uvIndex4 = document.querySelector(".UV-Index4")
                    uvIndex4.textContent = "UV Index: " + data.daily[2].uvi

                    let date5 = document.querySelector(".date5")
                    date5.textContent = moment().add(4, 'days').format("L")
                    let weatherImage5 = document.createElement('img')
                    weatherImage5.setAttribute('src', `http://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`)
                    let image5 = document.querySelector(".weather-image5")
                    image5.append(weatherImage5)
                    let temp5 = document.querySelector(".temp5")
                    temp5.textContent = "Temp: " + data.daily[3].temp.day + "°"
                    let wind5 = document.querySelector(".wind5")
                    wind5.textContent = "Wind: " + data.daily[3].wind_speed + " MPH"
                    let humidity5 = document.querySelector(".humidity5")
                    humidity5.textContent = "Humidity: " + data.daily[3].humidity + "%"
                    let uvIndex5 = document.querySelector(".UV-Index5")
                    uvIndex5.textContent = "UV Index: " + data.daily[3].uvi

                    let date6 = document.querySelector(".date6")
                    date6.textContent = moment().add(5, 'days').format("L")
                    let weatherImage6 = document.createElement('img')
                    weatherImage6.setAttribute('src', `http://openweathermap.org/img/w/${data.daily[4].weather[0].icon}.png`)
                    let image6 = document.querySelector(".weather-image6")
                    image6.append(weatherImage6)
                    let temp6 = document.querySelector(".temp6")
                    temp6.textContent = "Temp: " + data.daily[4].temp.day + "°"
                    let wind6 = document.querySelector(".wind6")
                    wind6.textContent = "Wind: " + data.daily[4].wind_speed + " MPH"
                    let humidity6 = document.querySelector(".humidity6")
                    humidity6.textContent = "Humidity: " + data.daily[4].humidity + "%"
                    let uvIndex6 = document.querySelector(".UV-Index6")
                    uvIndex6.textContent = "UV Index: " + data.daily[4].uvi
                });
        })
}

start()


$(".submit-button").on("click", function () {
    let search = $(this).parent().attr('searchHistory')
    let input = $(this).siblings('.search-box').val()
    localStorage.setItem(JSON.stringify, input)
})

let recentSearchesArray = [];
let recentSearches1 = document.querySelector(".recent-searches1")
let recentSearches2 = document.querySelector(".recent-searches2")
let recentSearches3 = document.querySelector(".recent-searches3")
let recentSearches4 = document.querySelector(".recent-searches4")
let recentSearches5 = document.querySelector(".recent-searches5")
// function searchFunction(data)

// $(".recent-searches1").val(localStorage.getItem)
// $(".recent-searches2").val(localStorage.getItem)
// $(".recent-searches3").val(localStorage.getItem)
// $(".recent-searches4").val(localStorage.getItem)
// $(".recent-searches5").val(localStorage.getItem)