import React, { useState, useEffect } from 'react'
import App from './App';


    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const ICON_URL = "http://openweathermap.org/img/wn/";
    const API_KEY = "754e27f08cef1aab1189b0ee748bf2bf";


export default function Weather({lat, lng, locationError}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    

    useEffect(() => {
        const url = API_URL + 
        "lat=" + lat + 
        "&lon=" + lng +
        "&units=metric" + 
        "&appid=" + API_KEY;
      
        fetch(url)
        .then(res => res.json())
        .then (
          (result) => {
            if (result.main != undefined) {
              setTemp(result.main.temp);
              setSpeed(result.wind.speed);
              setDirection(result.wind.deg);
              setDescription(result.weather[0].description);
              setIcon(ICON_URL + result.weather[0].icon + "@2x.png");

            } else {
              alert("Could not read weather information!");
            }
          }, (error) => {
            alert(error);
          }
        )
      }, [])
      if (locationError == true) {
          return (
              <div>Can't read weather information without location!</div>
          )
      } else {
    return (
        <>
       <h3>Weather on your location</h3>
       <div className="border-dark border width">
       <p>{temp} C&#176;</p>
       <p>{speed} m/s {direction}</p>
       <p className="description_icon">{description.toUpperCase()} <img className="icon_position" src={icon} alt=""/></p>
       </div>
       </>
    )
    }
}
