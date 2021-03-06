import './App.css';
import Header from "./components/Header"
import DateTime from "./components/DataTime";
import LocationList from "./components/LocationList";
import WeatherCamImage from "./components/WeatherCamImage";
import Footer from "./components/Footer";
import axios from "axios";
import { React, useEffect, useState } from "react";

function App() {
  const [queryString, setQueryString] = useState("")
  const [cameraData, setCameraData] = useState({})
  const [weatherData, setWeatherData] = useState([])
  const [camNForecastData, setCamNForecastData] = useState([])
  const [chosenLocation, setChosenLocation] = useState({})
  const [showWeatherCam, setShowWeatherCam] = useState(false)

  useEffect(() => {//setCameraData & setWeatherData
    if (queryString !== "") {//axios API if querystring not empty
      axios.all(
        [axios.get("https://api.data.gov.sg/v1/transport/traffic-images?date_time=" + queryString),
        axios.get("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" + queryString)]
      )
        .then(axios.spread((response1, response2) => {
          setCameraData(response1.data.items[0]) //object

          let areaNforecastArray = []
          const forecast = response2.data.items[0].forecasts; //[{area:"AMK", forecast="Fair"}, {},{}]
          const area_metadata = response2.data.area_metadata //[{name:"AMK", label_location:{}}]
          // Loop the area_metadata, for each {} in array, filter forecast [{}] with matching name, combined forecast with area_metadata
          for (let i = 0; i < area_metadata.length; i++) {
            //filter the {} with matching area
            let correspondingForecast = forecast.filter((forecastData) => forecastData.area === area_metadata[i].name); //[{area:"AMK", forcast:"windy"}]
            //have a combined {} of name, label_location, forecast
            let areaNforecast = { ...area_metadata[i], forecast: correspondingForecast[0].forecast };
            areaNforecastArray.push(areaNforecast);
          }
          setWeatherData(areaNforecastArray);
        }))
        .catch(axios.spread((error1, error2) => {
          console.log("axios traffic error", error1);
          console.log("axios weather error", error2);
        }));
    }
  }, [queryString])

  // if cameraData & weatherData is not empty, find nearest area for camera based on long & lat
  let cameraNforecastArray = [];
  useEffect(() => {//form camNForecastData
    if (Object.keys(cameraData).length !== 0 && weatherData.length !== 0) {

      for (let i = 0; i < cameraData.cameras.length; i++) { //walk through camera array 
        const closestLocation = (targetLocation, locationArray) => {
          //Step 1: Function to calculate the hypotenus
          const findHypotenus = (dx, dy) => {
            return Math.sqrt(dx * dx + dy * dy);
          }
          // Step 2: Using input to calculate hypotenus
          const distanceBtwLocation = (targetLocation, locationArray) => {
            const dx = targetLocation.latitude - locationArray.label_location.latitude;
            const dy = targetLocation.longitude - locationArray.label_location.longitude;
            // console.log("dy", dy, ". dx", dx)
            return findHypotenus(dx, dy);
          }

          // Step 3: for each {} in locationArray, calculate the distanceBtwLocation,
          //return the location nearest to it, if equal distance will return in order of array, hence the one with lowest alphabetical :/
          return locationArray.reduce((prev, curr) => {
            let prevDistance = distanceBtwLocation(targetLocation, prev);
            let currDistance = distanceBtwLocation(targetLocation, curr);
            return (prevDistance < currDistance) ? prev : curr;
          });
        }

        let closest = closestLocation(cameraData.cameras[i].location, weatherData)
        // console.log("for", cameraData.cameras[i], " cloest location is ", closest)

        //have a combined [{}] of camera, locaitonName, location_longlat, location_forecast
        let combinedCameraNForecast = { ...cameraData.cameras[i], locationName: closest.name, locationName_longlat: closest.label_location, locationName_forecast: closest.forecast };
        cameraNforecastArray.push(combinedCameraNForecast)
      }
      setCamNForecastData(cameraNforecastArray)
      // console.log("cameraNforecastArray", cameraNforecastArray)
    }
  }, [cameraData, weatherData])

  useEffect(() => {//if search date-time, dont show weatherCam
    if (queryString !== "") {
      setShowWeatherCam(false)
    }
  }, [queryString])

  const handleViewClick = (data) => {
    setChosenLocation(data)
    setShowWeatherCam(true)
  }

  return (
    <div class="container-fluid px-0" id="overall-app-cont">

      <Header />

      <DateTime setQueryString={setQueryString} />

      <LocationList cameraTime={cameraData.timestamp} camNForecastData={camNForecastData} handleViewClick={handleViewClick} />

      <WeatherCamImage chosenLocation={chosenLocation} showWeatherCam={showWeatherCam} />

      <Footer />
    </div>
  );
}

export default App;
