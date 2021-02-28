import React, { useState, useEffect } from "react";
// import { Image } from "react-bootstrap";

const WeatherCamImage = (props) => {
    const [locationChosen, setLocationChosen] = useState(false);
    const [imageTime, setImageTime] = useState("");
    const [geolocation, setGeoLocation] = useState({})

    useEffect(() => {
        if (Object.keys(props.chosenLocation).length !== 0) {
            setLocationChosen(true)
            let formattedDate = new Date(props.chosenLocation.timestamp).toLocaleString("en-AU")
            setImageTime(formattedDate)
            setGeoLocation(props.chosenLocation.location)
        } else {
            setLocationChosen(false)
        }
    }, [props.chosenLocation])

    const haveDetails =
        (
            <>
                <div>
                    <h5>Nearest Available Weather Info</h5>
                    <strong>Area: </strong>{props.chosenLocation.locationName}
                    <br />
                    <strong>Weather: </strong>{props.chosenLocation.locationName_forecast}
                </div>
                <div>
                    <h5>Traffic Camera Info</h5>
                    <strong>Camera ID: </strong>{props.chosenLocation.camera_id}
                    <br />
                    <strong>Exact Geo-location: </strong>({(geolocation.latitude).toFixed(3)}, {(geolocation.longitude).toFixed(3)})
                <br />
                    <strong>Time of image: </strong>{imageTime}
                </div>
            </>
        )

    const noDetails = (
        <> Select a camera from the list above
        </>
    )

    const haveImage = (
        <>
            <img src={props.chosenLocation.image} id="traffic-cam-image" alt="traffic camera image" />
            {/* <Image src={props.chosenLocation.image} fluid alt="traffic camera image" /> */}
        </>
    )

    const renderDetails = (locationChosen === true) ? haveDetails : noDetails

    const renderImage = (locationChosen === true) ? haveImage : <></>


    return (
        <div class="container-fluid  d-flex flex-row" id="weather-cam-image-cont">
            <div class="container-fluid col-4"><h3>Details for camera {props.chosenLocation.camera_id}</h3>
                {renderDetails}
            </div >

            <div class="container-fluid px-0 col-8" id="traffic-cam-image-div">
                {renderImage}
            </div>
        </div>
    )
}

export default WeatherCamImage