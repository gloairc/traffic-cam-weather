import React, { useEffect, useState } from "react";
// import axios from "axios";

const LocationList = (props) => {
    //clean up props.cameraData.timestamp here, remove +08:00, seperate date,time, reorder data & time
const [cameraId, setCameraId]= useState("")
    useEffect(()=>{
        if (props.camNForecastData.length !==0){
setCameraId(props.camNForecastData[0].camera_id)
        }
    },[props.camNForecastData])

    return (
        <div class="container-fluid" id="location-list-cont">
            Showing list acquired from LTA's datamall for {props.cameraData.timestamp}
            {/* table list of location, camera number */}
            {cameraId}
            
        </div>
    )
}

export default LocationList