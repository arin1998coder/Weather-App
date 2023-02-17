let weather = {
     "apikey":"4604553ef5f075560666c23a2525c81a",
     fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
     },
     //gets the required waeather data fields of the searched city from the json format(data)
     displayWeather: function (data){

        const{name}=data; //data contains name , so name is taken out of the obj and stored inside variable name
        const{icon,description}=data.weather[0]; //data.weather which is an array contains icon and description 
        const{temp,humidity}=data.main;
        const{speed} = data.wind;

        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="Humidity "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed "+speed+" km/h";
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x760?"+name+"')";
     }
};

//captures the user input city and displays the weather report of that city
const showWeather=()=>{
    let city = document.querySelector(".search-bar").value;
    weather.fetchWeather(city);
}

//attached an event listener to the search button, 
//on search button click, the showWeather function is called
document.getElementById("btn").addEventListener("click",function(){
    showWeather();
});

//displays weather report of the city entered on enter keypress
document.querySelector(".search-bar").addEventListener("keypress",
    function(e){
        if(e.key==="Enter"){
            showWeather();
            console.log("keypressed");
        }
    }
);

weather.fetchWeather("kolkata");

//"https://source.unsplash.com/1600x900/?landscape"