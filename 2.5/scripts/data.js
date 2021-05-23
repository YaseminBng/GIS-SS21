"use strict";
var Abgabe_5;
(function (Abgabe_5) {
    Abgabe_5.posibilityTop = [];
    Abgabe_5.posibilityMiddle = [];
    Abgabe_5.posibilityBottom = [];
    function allPosArrayToJSON() {
        let allPosArray = { top: Abgabe_5.posibilityTop, middle: Abgabe_5.posibilityMiddle, bottom: Abgabe_5.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        return json;
    }
    Abgabe_5.allPosArrayToJSON = allPosArrayToJSON;
    function allPosArrayFromJSON(jsonStr) {
        Abgabe_5.posibilityTop = [];
        Abgabe_5.posibilityMiddle = [];
        Abgabe_5.posibilityBottom = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posInterf = json[key];
                posInterf.forEach(pos => {
                    let posibility = new Abgabe_5.Posibility(pos.name, pos.type, pos.link);
                    if (posibility.type == 0) {
                        posibility.removeSameFromArray(Abgabe_5.posibilityTop, posibility.name);
                        Abgabe_5.posibilityTop.unshift(posibility);
                    }
                    else if (posibility.type == 1) {
                        posibility.removeSameFromArray(Abgabe_5.posibilityMiddle, posibility.name);
                        Abgabe_5.posibilityMiddle.unshift(posibility);
                    }
                    else if (posibility.type == 2) {
                        posibility.removeSameFromArray(Abgabe_5.posibilityBottom, posibility.name);
                        Abgabe_5.posibilityBottom.unshift(posibility);
                    }
                });
            }
        });
    }
    Abgabe_5.allPosArrayFromJSON = allPosArrayFromJSON;
    async function getPossibilitysFromURL(_url) {
        let response = await fetch(_url);
        let json = await response.text();
        allPosArrayFromJSON(json);
    }
    Abgabe_5.getPossibilitysFromURL = getPossibilitysFromURL;
})(Abgabe_5 || (Abgabe_5 = {}));
//# sourceMappingURL=data.js.map