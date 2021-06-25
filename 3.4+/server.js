"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3_4 = void 0;
/;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A3_4;
(function (A3_4) {
    let mongoCollection;
    let mongoUrl = "https://mongodbnetbrowser.herokuapp.com/?u=dbUser&p=GIS2021&a=gis.rjakz.mongodb.net&n=Test&c=Students";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting Server");
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    connectToDatabase(mongoUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("Test").collection("Students");
        console.log("Verbindung zu Database", mongoCollection != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsole gibt I hear voices aus
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/abschicken") {
                mongoCollection.insertOne(url.query);
                connectToDatabase(mongoUrl);
            }
            if (pathname == "/erhalten") {
                _response.write(JSON.stringify(await (mongoCollection.find().toArray())));
            }
            else if (pathname == "/entfernen") {
                mongoCollection.deleteOne({ "First name": url.query["First name"], "Last name": url.query["Last name"], "Matrikelnummer": url.query["Matrikelnummer"] });
                connectToDatabase(mongoUrl);
            }
        }
        _response.end();
    }
})(A3_4 = exports.A3_4 || (exports.A3_4 = {}));
//# sourceMappingURL=server.js.map