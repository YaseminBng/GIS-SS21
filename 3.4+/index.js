"use strict";
var A3_4;
(function (A3_4) {
    let buttonAbschicken = document.getElementById("dAbschicken");
    buttonAbschicken.addEventListener("click", cAbschicken);
    let buttonErhalten = document.getElementById("dErhalten");
    buttonErhalten.addEventListener("click", cErhalten);
    let buttonEnfernen = document.getElementById("dEntfernen");
    buttonEnfernen.addEventListener("click", cEntfernen);
    async function cAbschicken() {
        let form = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://letsdothisgis20.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/abschicken" + "?" + query.toString();
        await fetch(url);
    }
    async function cErhalten() {
        console.log("hey");
        //let url: string = "http://localhost:8100";
        let url = "https://letsdothisgis20.herokuapp.com";
        url = url + "/erhalten";
        let response = await fetch(url);
        let ausgabe = await response.text();
        let serverA = document.getElementById("datenbank");
        serverA.innerHTML = ausgabe;
        console.log(ausgabe);
        document.getElementById("datenbank").innerHTML = ausgabe;
    }
    async function cEntfernen() {
        let form = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://letsdothisgis20.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/entfernen" + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        let serverA = document.getElementById("datenbank");
        serverA.innerHTML = ausgabe;
    }
})(A3_4 || (A3_4 = {}));
//# sourceMappingURL=index.js.map