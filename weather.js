
const weather =document.querySelector(".js-weather");

const API_KEY ="13be780d264a8518522acea255cc57ec";

function getWeather(lat,lng){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(respone){
    return respone.json()
}).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
})
}

function saveCoords(coordsObj){
    localStorage.setItem("coords",JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude =position.coords.latitude;
    const longitude =position.coords.longitude;
    const coordsObj = {
        //객체에 변수의 이름과 객체의 키가 같으면 그냥ㅇ 이렇게 할 수 있음
        latitude, longitude
    };
saveCoords(coordsObj);
getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log("cant access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}
function loadCoords(){
    const loadCoords =localStorage.getItem("coords");
    if(loadCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
loadCoords();
}
init();