import React, { useEffect, useState } from "react";
// import axios from "axios";

const LocationList = (props) => {
    //clean up props.cameraData.timestamp here, remove +08:00, seperate date,time, reorder data & time
    
    return (
        <div class="container-fluid" id="location-list-cont">
            Showing list acquired from LTA's datamall for {props.cameraData.timestamp}
            
            
        </div>
    )
}

export default LocationList