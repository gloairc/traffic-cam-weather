import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const LocationList = (props) => {
    //clean up props.cameraData.timestamp here, remove +08:00, seperate date,time, reorder data & time
    const [camNForecastData, setCamNForecastData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [dateTimeAcquired, setDateTimeAcquired] = useState("selected date & time")

    useEffect(() => {
        if (props.cameraTime !== undefined) {
            let formattedDate = new Date(props.cameraTime).toLocaleString("en-AU")
            setDateTimeAcquired(formattedDate)
        }
        if (props.camNForecastData.length !== 0) {
            setCamNForecastData(props.camNForecastData)
            setLoaded(true)
        } else {
            setLoaded(false)
        }
    }, [props.camNForecastData])

    console.log("locationlist array outside, ", camNForecastData)

    return (
        <div class="container-fluid" id="location-list-cont">
            Showing list of traffic cameras on {dateTimeAcquired}
            {/* table list of S/N, location, camera number */}

            <div class="container-fluid" id="table-cont" >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Nearest Location</th>
                            <th>Camera ID</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loaded ? (
                            <>
                                {camNForecastData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.locationName}</td>
                                        <td>{data.camera_id}</td>
                                        <td><Button
                                            onClick={() => {
                                                console.log("handle view click", data)
                                                props.handleViewClick(data);
                                            }}
                                            variant="primary"
                                        >View</Button></td>
                                    </tr>

                                ))}
                            </>
                        ) : (<tr><td colSpan="12">Pick a Date & Time</td></tr>)}



                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default LocationList