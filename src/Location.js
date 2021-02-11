import React from 'react'
import Weather from "./Weather"
import {useEffect, useState} from "react"

export default function Location() {
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
        <>
        <h3>Your location</h3>
        <p>
            {lat.toFixed(3)},
            {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lng={lng} locationError={locationError} />
        </>
    );
    }
}

