import React from "react";

const WeatherCamImage = (props) => {

    return (
        <div class="container-fluid  d-flex flex-row" id="weather-cam-image-cont">
            <div class="container-fluid"><h1>Weather</h1>
                {props.chosenLocation.locationName_forecast}
            </div >

            <div class="container-fluid" id="traffic-cam-image-div">Cam Image
            <img src={props.chosenLocation.image} id="traffic-cam-image" alt="traffic camera image" />
            </div>
        </div>
    )
}

export default WeatherCamImage