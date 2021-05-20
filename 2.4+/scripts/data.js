"use strict";
var Abgabe_4;
(function (Abgabe_4) {
    Abgabe_4.posibilityTop = [];
    Abgabe_4.posibilityMiddle = [];
    Abgabe_4.posibilityBottom = [];
    //cupcake 1
    let top1 = new Abgabe_4.Posibility("cupcake1 - Top", 0, "images/top1.png");
    let middle1 = new Abgabe_4.Posibility("cupcake1 - Middle", 1, "images/middle1.png");
    let bottom1 = new Abgabe_4.Posibility("cupcake1 - Bottom", 2, "images/bottom1.png");
    //cupcake 2
    let top2 = new Abgabe_4.Posibility("cupcake2 - Top", 0, "images/top2.png");
    let middle2 = new Abgabe_4.Posibility("cupcake2 - Middle", 1, "images/middle2.png");
    let bottom2 = new Abgabe_4.Posibility("cupcake2 - Bottom", 2, "images/bottom2.png");
    //cupcake 3
    let top3 = new Abgabe_4.Posibility("cupcake3 - Top", 0, "images/top3.png");
    let middle3 = new Abgabe_4.Posibility("cupcake3 - Middle", 1, "images/middle3.png");
    let bottom3 = new Abgabe_4.Posibility("cupcake3 - Bottom", 2, "images/bottom3.png");
    allPosArrayFromJSON(allPosArrayToJSON());
    function allPosArrayToJSON() {
        let allPosArray = { top: Abgabe_4.posibilityTop, middle: Abgabe_4.posibilityMiddle, bottom: Abgabe_4.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        console.log(json);
        return json;
    }
    Abgabe_4.allPosArrayToJSON = allPosArrayToJSON;
    function allPosArrayFromJSON(jsonStr) {
        Abgabe_4.posibilityTop = [];
        Abgabe_4.posibilityMiddle = [];
        Abgabe_4.posibilityBottom = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posInterf = json[key];
                posInterf.forEach(pos => {
                    new Abgabe_4.Posibility(pos.name, pos.type, pos.link);
                });
            }
        });
    }
    Abgabe_4.allPosArrayFromJSON = allPosArrayFromJSON;
})(Abgabe_4 || (Abgabe_4 = {}));
//# sourceMappingURL=data.js.map