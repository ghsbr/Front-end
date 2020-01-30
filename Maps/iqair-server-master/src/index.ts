import * as express from "express";
import * as IqairApi from "iqair";

const port = 3000 || process.env.PORT;
const app = express();

// TODO: Usare apidoc o ancora meglio cercare qualcosa che utilizzi typescript
// per evitare di dover ripetere cose che sono già dichiarate nelle interfacce

app.get("/", (_, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.end(
        `
<pre style="word-wrap: break-word; white-space: pre-wrap;">Ritorna tutte le città presenti nel db.
/all-cities

Ritorna le città più inquinate.
/most-polluted-cities

Ritorna gli stati più inquinati dell'anno scorso (si aggiorna ogni anno circa).
/last-year-most-polluted-countries

Ritorna le città più inquinate dell'anno scorso (si aggiorna ogni anno circa).
/last-year-most-polluted-all-cities

Ritorna i dettagli sulla città della stazione.
:stationId --> ID della stazione.
/city/:stationId

Trova la città più vicina alle coordinate date.
/get-nearest-city?latitude=45.545898&longitude=11.540310

Ritorna le stazioni più vicine all'interno della bounding box.
/stations-in-area?minLongitude=-74.23585270279935&minLatitude=40.49794521493587&maxLongitude=-73.62133929720065&maxLatitude=40.890279209228346

Cerca stazioni, città, contributori, pubblicazioni.
:query --> Query di ricerca.
/search/:query

Ritorna lo CityId della località specificata.
:cityRoute --> Route della località.
/city-id/:cityRoute

Ritorna le stazioni della città ordinate per AQI (Air Quality Index).
:cityId --> ID della città.
/city-rankings/:cityId

Cerca tutte le stazioni in una città.
:cityId --> ID della città.
/stations/:cityId

Ritorna misurazioni effettuate sulla città, aggiornate in tempo reale.
:cityId --> ID della città
/measurements/:cityId

Ritorna le 3 città più inquinate del paese.
:countryId --> ID del paese.
/top-3-countries/:countryId

Ritorna le città più inquinate, 50 alla volta.
:page --> Pagina da ottenere.
/rankings/:page

Ritorna le città più inquinate dell'anno scorso, 50 alla volta.
:page --> Pagina da ottenere.
/last-year-most-polluted-cities/:page</pre>`.trimStart()
    );
});

app.get("/all-cities", async (_, res) => {
    const allCities = await IqairApi.allCities();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(allCities));
});

app.get("/most-polluted-cities", async (_, res) => {
    const mostPollutedCities = await IqairApi.mostPollutedCities();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(mostPollutedCities));
});

app.get("/last-year-most-polluted-countries", async (_, res) => {
    const lastYearMostPullutedCountries = await IqairApi.lastYearMostPollutedCountries();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(lastYearMostPullutedCountries));
});

app.get("/last-year-most-polluted-all-cities", async (_, res) => {
    const lastYearMostPollutedAllCities = await IqairApi.lastYearMostPollutedAllCities();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(lastYearMostPollutedAllCities));
});

// stationId di esempio: 5c652852eff5bf47a1cac6ac
app.get("/city/:stationId", async (req, res) => {
    const city = await IqairApi.city(req.params.stationId);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(city));
});

// Query params:
// latitude: number  (es. 45.545898)
// longitude: number (es. 11.540310)
app.get("/get-nearest-city", async (req, res) => {
    const latitude = parseFloat(req.query.latitude);
    const longitude = parseFloat(req.query.longitude);

    if (isNaN(latitude) || isNaN(longitude)) {
        res.end(
            `
Errore: servono i parametri {
    latitude: number
    longitude: number
}

Per esempio: /get-nearest-city?latitude=45.545898&longitude=11.540310`.trimStart()
        );
        return;
    }

    const nearestCity = await IqairApi.getNearestCity({
        latitude: latitude,
        longitude: longitude
    });

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(nearestCity));
});

// Query params:
// minLongitude: number (-74.23585270279935)
// minLatitude: number  (40.49794521493587)
// maxLongitude: number (-73.62133929720065)
// maxLatitude: number  (40.890279209228346)
app.get("/stations-in-area", async (req, res) => {
    const minLongitude = parseFloat(req.query.minLongitude);
    const minLatitude = parseFloat(req.query.minLatitude);
    const maxLongitude = parseFloat(req.query.maxLongitude);
    const maxLatitude = parseFloat(req.query.maxLatitude);

    if (
        isNaN(minLongitude) ||
        isNaN(minLatitude) ||
        isNaN(maxLongitude) ||
        isNaN(maxLatitude)
    ) {
        res.end(
            `
Errore: servono i parametri {
    minLongitude: number
    minLatitude: number
    maxLongitude: number
    maxLatitude: number
}

Per esempio: /stations-in-area?minLongitude=-74.23585270279935&minLatitude=40.49794521493587&maxLongitude=-73.62133929720065&maxLatitude=40.890279209228346`.trimStart()
        );
        return;
    }

    const stationsInArea = await IqairApi.stationsInArea({
        minLongitude,
        minLatitude,
        maxLongitude,
        maxLatitude
    });

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(stationsInArea));
});

app.get("/search/:query", async (req, res) => {
    const searchResults = await IqairApi.search(req.params.query);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(searchResults));
});

app.get("/city-id/:cityRoute", async (req, res) => {
    const cityId = await IqairApi.getCityId(req.params.cityRoute);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(cityId));
});

app.get("/city-rankings/:cityId", async (req, res) => {
    const cityRankings = await IqairApi.cityRankings(req.params.cityId);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(cityRankings));
});

app.get("/stations/:cityId", async (req, res) => {
    const stations = await IqairApi.stationsByCityId(req.params.cityId);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(stations));
});

app.get("/measurements/:cityId", async (req, res) => {
    const measurements = await IqairApi.measurements(req.params.cityId);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(measurements));
});

app.get("/top-3-countries/:countryId", async (req, res) => {
    const top3Countries = await IqairApi.top3ByCountry(req.params.countryId);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(top3Countries));
});

app.get("/rankings/:page", async (req, res) => {
    const rankings = await IqairApi.rankings(parseInt(req.params.page)).next();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(rankings));
});

app.get("/last-year-most-polluted-cities/:page", async (req, res) => {
    const lastYearMostPollutedCities = await IqairApi.lastYearMostPollutedCities(
        parseInt(req.params.page)
    ).next();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(lastYearMostPollutedCities));
});

app.listen(port, () =>
    console.log(`Server in ascolto in http://localhost:${port}`)
);
