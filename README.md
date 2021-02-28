# traffic-cam-weather
Retrieve traffic camera photos &amp; weather info at specified date &amp; time using data.gov.sg API

### Tech used
1. ReactJS
2. Bootstrap
3. react-bootstrap
4. axios

### Assumptions & Interpretation
- Assume only need weather forecast data from "2-hour Weather Forecast", which only returns a string (e.g Windy, Fair, Sunny etc), without details like relative humidity, temperature. The later need the areas to be manually sorted into regions in order to be able to pull the right details from "24-hour Weather Forecast".

### How to run source code locally
1. Open your computer's terminal. The following steps will be run on your terminal.
2. git clone the repository to your computer
3. cd into the repository folder
4. ```npm install```
5. After all dependencies have been install, ```npm run start```
6. A browser should pop up with the app.

### Future Developments
1. Validation for the search bar. Prompts user to fill in both Date & Time. And can only search for Date & Time that has past.
2. Allow user to sort the list of traffic cameras (e.g alphabetical) and/or perhaps group the list according to geographical region (e.g N,S,E,W). Currently show by Camera ID ascending order.
3. Alternate design to maximize spacing would be to put "Weather & Camera Details" to the right. This allows more vertical space for the traffic camera list (left side of page) and image & details (right side of page).
4. Fix the footer at the bottom of the viewport.
5. On click of traffic camera image, a modal to pop out to show the image in bigger resolution.
6. Fix stlying bug for smaller viewports (e.g. Mobile-S 320px) 
7. Round up the exact geo-location to 3 d.p (e.g using toFixed(3))
