
import './App.css';
import { useState, useEffect } from "react";
import Location from "./Location"
import Weather from "./Weather"


function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=> {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
        }, (error) => {
        alert(error);
        setIsLoading(false);
        setLocationError(true);
      })
    }
    else {
      alert("Your browser does not support geolocation!")
    }
  }, [])

  if (isLoading == true) {
    return <p className="text-center pt-4">Loading... <span className="spinner-border"></span></p>
  } else {
  return (
    <div className="my_container">
    <h3>Your location</h3>
    <Location lat={lat} lng={lng}/>
    <Weather lat={lat} lng={lng} locationError={locationError} />
    </div>
  );
}
}

export default App;
