"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var IqairApi = require("iqair");
var port = 3000 || process.env.PORT;
var app = express();
// TODO: Usare apidoc o ancora meglio cercare qualcosa che utilizzi typescript
// per evitare di dover ripetere cose che sono già dichiarate nelle interfacce
app.get("/", function (_, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end("\n<pre style=\"word-wrap: break-word; white-space: pre-wrap;\">Ritorna tutte le citt\u00E0 presenti nel db.\n/all-cities\n\nRitorna le citt\u00E0 pi\u00F9 inquinate.\n/most-polluted-cities\n\nRitorna gli stati pi\u00F9 inquinati dell'anno scorso (si aggiorna ogni anno circa).\n/last-year-most-polluted-countries\n\nRitorna le citt\u00E0 pi\u00F9 inquinate dell'anno scorso (si aggiorna ogni anno circa).\n/last-year-most-polluted-all-cities\n\nRitorna i dettagli sulla citt\u00E0 della stazione.\n:stationId --> ID della stazione.\n/city/:stationId\n\nTrova la citt\u00E0 pi\u00F9 vicina alle coordinate date.\n/get-nearest-city?latitude=45.545898&longitude=11.540310\n\nRitorna le stazioni pi\u00F9 vicine all'interno della bounding box.\n/stations-in-area?minLongitude=-74.23585270279935&minLatitude=40.49794521493587&maxLongitude=-73.62133929720065&maxLatitude=40.890279209228346\n\nCerca stazioni, citt\u00E0, contributori, pubblicazioni.\n:query --> Query di ricerca.\n/search/:query\n\nRitorna lo CityId della localit\u00E0 specificata.\n:cityRoute --> Route della localit\u00E0.\n/city-id/:cityRoute\n\nRitorna le stazioni della citt\u00E0 ordinate per AQI (Air Quality Index).\n:cityId --> ID della citt\u00E0.\n/city-rankings/:cityId\n\nCerca tutte le stazioni in una citt\u00E0.\n:cityId --> ID della citt\u00E0.\n/stations/:cityId\n\nRitorna misurazioni effettuate sulla citt\u00E0, aggiornate in tempo reale.\n:cityId --> ID della citt\u00E0\n/measurements/:cityId\n\nRitorna le 3 citt\u00E0 pi\u00F9 inquinate del paese.\n:countryId --> ID del paese.\n/top-3-countries/:countryId\n\nRitorna le citt\u00E0 pi\u00F9 inquinate, 50 alla volta.\n:page --> Pagina da ottenere.\n/rankings/:page\n\nRitorna le citt\u00E0 pi\u00F9 inquinate dell'anno scorso, 50 alla volta.\n:page --> Pagina da ottenere.\n/last-year-most-polluted-cities/:page</pre>".trimStart());
});
app.get("/all-cities", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allCities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.allCities()];
            case 1:
                allCities = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(allCities));
                return [2 /*return*/];
        }
    });
}); });
app.get("/most-polluted-cities", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var mostPollutedCities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.mostPollutedCities()];
            case 1:
                mostPollutedCities = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(mostPollutedCities));
                return [2 /*return*/];
        }
    });
}); });
app.get("/last-year-most-polluted-countries", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lastYearMostPullutedCountries;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.lastYearMostPollutedCountries()];
            case 1:
                lastYearMostPullutedCountries = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(lastYearMostPullutedCountries));
                return [2 /*return*/];
        }
    });
}); });
app.get("/last-year-most-polluted-all-cities", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lastYearMostPollutedAllCities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.lastYearMostPollutedAllCities()];
            case 1:
                lastYearMostPollutedAllCities = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(lastYearMostPollutedAllCities));
                return [2 /*return*/];
        }
    });
}); });
// stationId di esempio: 5c652852eff5bf47a1cac6ac
app.get("/city/:stationId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var city;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.city(req.params.stationId)];
            case 1:
                city = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(city));
                return [2 /*return*/];
        }
    });
}); });
// Query params:
// latitude: number  (es. 45.545898)
// longitude: number (es. 11.540310)
app.get("/get-nearest-city", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var latitude, longitude, nearestCity;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                latitude = parseFloat(req.query.latitude);
                longitude = parseFloat(req.query.longitude);
                if (isNaN(latitude) || isNaN(longitude)) {
                    res.end("\nErrore: servono i parametri {\n    latitude: number\n    longitude: number\n}\n\nPer esempio: /get-nearest-city?latitude=45.545898&longitude=11.540310".trimStart());
                    return [2 /*return*/];
                }
                return [4 /*yield*/, IqairApi.getNearestCity({
                        latitude: latitude,
                        longitude: longitude
                    })];
            case 1:
                nearestCity = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(nearestCity));
                return [2 /*return*/];
        }
    });
}); });
// Query params:
// minLongitude: number (-74.23585270279935)
// minLatitude: number  (40.49794521493587)
// maxLongitude: number (-73.62133929720065)
// maxLatitude: number  (40.890279209228346)
app.get("/stations-in-area", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var minLongitude, minLatitude, maxLongitude, maxLatitude, stationsInArea;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                minLongitude = parseFloat(req.query.minLongitude);
                minLatitude = parseFloat(req.query.minLatitude);
                maxLongitude = parseFloat(req.query.maxLongitude);
                maxLatitude = parseFloat(req.query.maxLatitude);
                if (isNaN(minLongitude) ||
                    isNaN(minLatitude) ||
                    isNaN(maxLongitude) ||
                    isNaN(maxLatitude)) {
                    res.end("\nErrore: servono i parametri {\n    minLongitude: number\n    minLatitude: number\n    maxLongitude: number\n    maxLatitude: number\n}\n\nPer esempio: /stations-in-area?minLongitude=-74.23585270279935&minLatitude=40.49794521493587&maxLongitude=-73.62133929720065&maxLatitude=40.890279209228346".trimStart());
                    return [2 /*return*/];
                }
                return [4 /*yield*/, IqairApi.stationsInArea({
                        minLongitude: minLongitude,
                        minLatitude: minLatitude,
                        maxLongitude: maxLongitude,
                        maxLatitude: maxLatitude
                    })];
            case 1:
                stationsInArea = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(stationsInArea));
                return [2 /*return*/];
        }
    });
}); });
app.get("/search/:query", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchResults;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.search(req.params.query)];
            case 1:
                searchResults = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(searchResults));
                return [2 /*return*/];
        }
    });
}); });
app.get("/city-id/:cityRoute", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cityId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.getCityId(req.params.cityRoute)];
            case 1:
                cityId = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(cityId));
                return [2 /*return*/];
        }
    });
}); });
app.get("/city-rankings/:cityId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cityRankings;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.cityRankings(req.params.cityId)];
            case 1:
                cityRankings = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(cityRankings));
                return [2 /*return*/];
        }
    });
}); });
app.get("/stations/:cityId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var stations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.stationsByCityId(req.params.cityId)];
            case 1:
                stations = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(stations));
                return [2 /*return*/];
        }
    });
}); });
app.get("/measurements/:cityId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var measurements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.measurements(req.params.cityId)];
            case 1:
                measurements = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(measurements));
                return [2 /*return*/];
        }
    });
}); });
app.get("/top-3-countries/:countryId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var top3Countries;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.top3ByCountry(req.params.countryId)];
            case 1:
                top3Countries = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(top3Countries));
                return [2 /*return*/];
        }
    });
}); });
app.get("/rankings/:page", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rankings;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.rankings(parseInt(req.params.page)).next()];
            case 1:
                rankings = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(rankings));
                return [2 /*return*/];
        }
    });
}); });
app.get("/last-year-most-polluted-cities/:page", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lastYearMostPollutedCities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, IqairApi.lastYearMostPollutedCities(parseInt(req.params.page)).next()];
            case 1:
                lastYearMostPollutedCities = _a.sent();
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.end(JSON.stringify(lastYearMostPollutedCities));
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    return console.log("Server in ascolto in http://localhost:" + port);
});
