import './App.css';
import Header from "./components/Header"
import DateTime from "./components/DataTime";
import LocationList from "./components/LocationList";
import WeatherCamImage from "./components/WeatherCamImage"

function App() {
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
