let input=document.querySelector('input');

const heading=document.getElementById('heading');
const API_KEY='fb255fd82217162ad6b13de9f6714344';


input.addEventListener('keyup', (e)=>{
    e.preventDefault();
    if(e.keyCode === 13){
        Answer(e.target.value);
     e.target.value="";
     }
})


function Answer(CITY_NAME)
{

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`)
           .then((res)=>{
             return res.json();
           })
           .then (displayResults);
 }



 function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  
    //date () => dateBuilder
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
  
    //temprature 
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    
    //weather 
    let weather_eg = document.querySelector('.current .weather');
    weather_eg.innerText = weather.weather[0].main;
  
  
    //temperatue max min
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.floor(weather.main.temp_min)}°c / ${Math.ceil(weather.main.temp_max)}°c`;
  }
  
  
  
  
  //date logic
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }




