import './App.css';
import Header from "./components/Header"
import DateTime from "./components/DataTime";
import LocationList from "./components/LocationList";
import WeatherCamImage from "./components/WeatherCamImage";
import axios from "axios";

function App() {
  //either set up the url for the axios
  // figure out how to combine the tables lat-long => readable name

  // <DATETIME/>: date input, time input => urlencode => pass up to APP
  //APP => make 2 axios traffic-cam API & weather API, 
  // setState for traffic, setState for weather
  //APP => pass down to readable location list & camera image & weather info to <LocationList/> 
  // on click of LocationList => => setState in APP => pass down to <WeatherCamImage /> show image & weather

  //USESTATE
  //useState for axios url
  //useState for traffic cam API
  // useState for weather API
  // useState for chosenlocation

  return (
    <div class="container-fluid px-0" id="overall-app-cont">

      <Header />

      <DateTime />

      <LocationList />

      <WeatherCamImage />

    </div>
  );
}

export default App;
