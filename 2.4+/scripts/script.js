"use strict";
var Abgabe_4;
(function (Abgabe_4) {
    Abgabe_4.selectedElements = { top: undefined, middle: undefined, bottom: undefined };
    Abgabe_4.keyConfig = "ConfigJson";
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                this.removeSameFromArray(posibilityTop, this.name);
                posibilityTop.unshift(this);
            }
            else if (this.type == 1) {
                this.removeSameFromArray(posibilityMiddle, this.name);
                posibilityMiddle.unshift(this);
            }
            else if (this.type == 2) {
                this.removeSameFromArray(posibilityBottom, this.name);
                posibilityBottom.push(this);
            }
        }
        removeSameFromArray(posArray, name) {
            posArray.forEach((element, i) => {
                if (element.name == name) {
                    posArray.splice(i, 1);
                }
            });
        }
        getInterface() {
            return { name: this.name, type: this.type, link: this.link };
        }
    }
    Abgabe_4.Posibility = Posibility;
    function selectedToJSON() {
        let json;
        json = JSON.stringify(Abgabe_4.selectedElements);
        console.log(json);
        sessionStorage.setItem(Abgabe_4.keyConfig, json);
    }
    Abgabe_4.selectedToJSON = selectedToJSON;
    function selectedFromJSON(jsonStr) {
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos = json[key];
                let topPos = new Posibility(pos.name, pos.type, pos.link);
                Abgabe_4.selectedElements.top = topPos;
            }
            else if (key == "middle") {
                let pos = json[key];
                let middlePos = new Posibility(pos.name, pos.type, pos.link);
                Abgabe_4.selectedElements.middle = middlePos;
            }
            else if (key == "bottom") {
                let pos = json[key];
                let bottomPos = new Posibility(pos.name, pos.type, pos.link);
                Abgabe_4.selectedElements.bottom = bottomPos;
            }
        });
    }
    Abgabe_4.selectedFromJSON = selectedFromJSON;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(Abgabe_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (Abgabe_4.selectedElements.top == undefined) {
                    window.open("top.html", "_self");
                }
                else if (Abgabe_4.selectedElements.middle == undefined) {
                    window.open("middle.html", "_self");
                }
                else if (Abgabe_4.selectedElements.bottom == undefined) {
                    window.open("bottom.html", "_self");
                }
                else {
                    window.open("result.html", "_self");
                }
            }
            else {
                console.log("Keine Selektion");
                window.open("top.html", "_self");
            }
        }
    }
    else if (path == "result.html") {
        let imageTop = document.getElementById("imgTop");
        let imageMiddle = document.getElementById("imgMiddle");
        let imageBottom = document.getElementById("imgBottom");
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(Abgabe_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
            }
            else {
                console.log("no selection");
                loadImages();
            }
        }
        function loadImages() {
            if (Abgabe_4.selectedElements.top != undefined) {
                imageTop.src = Abgabe_4.selectedElements.top.link;
            }
            if (Abgabe_4.selectedElements.middle != undefined) {
                imageMiddle.src = Abgabe_4.selectedElements.middle.link;
            }
            if (Abgabe_4.selectedElements.bottom != undefined) {
                imageBottom.src = Abgabe_4.selectedElements.bottom.link;
            }
            console.log(Abgabe_4.selectedElements);
        }
        let btEditTop = document.getElementById("btTop");
        btEditTop.addEventListener("click", openDetailTop);
        let btEditMiddle = document.getElementById("btMiddle");
        btEditMiddle.addEventListener("click", openDetailMiddle);
        let btEditBottom = document.getElementById("btBottom");
        btEditBottom.addEventListener("click", openDetailBottom);
        function openDetailTop() {
            window.open("top.html", "_self");
            console.log("Open Detail Top");
        }
        function openDetailMiddle() {
            window.open("middle.html", "_self");
            console.log("Open Detail Middle");
        }
        function openDetailBottom() {
            window.open("bottom.html", "_self");
            console.log("Open Detail Bottom");
        }
    }
})(Abgabe_4 || (Abgabe_4 = {}));
//# sourceMappingURL=script.js.map