import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationList = () => {
    const [camera, setCamera] = useState("hi")

    // useEffect = (() => {
    axios
        .get("https://api.data.gov.sg/v1/transport/traffic-images?date_time=2021-02-26T12%3A27%3A50%2B08%3A00")
        .then((response) => {
            console.log("axios response", response);
            // setCamera(response.data)
        })
        .catch((error) => {
            console.log("axios error", error);
        });
    // }, [])

    return (
        <div class="container-fluid" id="location-list-cont">
            Location List
            {camera}
        </div>
    )
}

export default LocationList