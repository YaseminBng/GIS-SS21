"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3_2server = void 0;
const Http = require("http");
const Url = require("url");
var A3_2server;
(function (A3_2server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); // Nimmt den aktuellen Port
    if (!port)
        port = 8100; // wenn es kein Port gibt, dann wird der Port mit dem wert 8100 initialisiert
    let server = Http.createServer(); //erstellt neuen Server
    server.addListener("request", handleRequest); // Server wird ein listener angehängt -> so wird  die Funktion handleRequest aufruft
    server.addListener("listening", handleListen); // Server wird ein listener angehängt -> so wird   die Funktion handleListen aufruft
    server.listen(port); //Server reagiert auf  definierten Port
    function handleListen() {
        console.log("listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //zugangsberechtigung
        let url = Url.parse(_request.url, true);
        let query = url.query;
        if (url.pathname == "/html") { //bin auf html?
            for (let key in query) { // alle keys durchgehen
                let value = query[key]; //verwende für jeden key den value
                _response.write("<p>KEY: " + key + ", Value: " + value + "</p>"); //schreibe die Verbindung aus Key und Value
            }
        }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "applications/json");
            _response.write(JSON.stringify(query));
        }
        _response.end();
    }
})(A3_2server = exports.A3_2server || (exports.A3_2server = {}));
//# sourceMappingURL=bspserver.js.map