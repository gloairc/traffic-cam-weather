import React, { useState, useEffect } from "react";
// import { Image } from "react-bootstrap";

const WeatherCamImage = (props) => {
    const [locationChosen, setLocationChosen] = useState(false)
    console.log("props.chosenLocation", props.chosenLocation)
    useEffect(() => {
        setLocationChosen(false);
        if (Object.keys(props.chosenLocation).length !== 0) {
            setLocationChosen(true)
        }
    }, [props.chosenLocation])

    const haveDetails =
        (
            <>
                <h4>Nearest Available Weather Info</h4>
                      Forecast Area: {props.chosenLocation.locationName}
                <br />
        Weather: {props.chosenLocation.locationName_forecast}
                <br />
                <h4>Traffic Camera Info</h4>
        Camera ID: {props.chosenLocation.camera_id}
                <br />
                {/* Exact Geo-location: ({props.chosenLocation.location.latitude}, {props.chosenLocation.location.longitude}) */}
                   Exact Geo-location: ({JSON.stringify(props.chosenLocation.location)})
                <br />
        Time of image: {props.chosenLocation.timestamp}
            </>
        )

    const noDetails = (
        <> Select a location from the list above
        </>
    )

    const haveImage = (
        <>
            <img src={props.chosenLocation.image} id="traffic-cam-image" alt="traffic camera image" />
            {/* <Image src={props.chosenLocation.image} fluid alt="traffic camera image" /> */}
        </>
    )

    const renderDetails = (locationChosen === true) ? haveDetails : noDetails

    const renderImage = (locationChosen === true) ? haveImage : noDetails


    return (
        <div class="container-fluid  d-flex flex-row" id="weather-cam-image-cont">
            <div class="container-fluid"><h1>Details</h1>
                {renderDetails}
            </div >

            <div class="container-fluid" id="traffic-cam-image-div">
                {renderImage}
            </div>
        </div>
    )
}

export default WeatherCamImage