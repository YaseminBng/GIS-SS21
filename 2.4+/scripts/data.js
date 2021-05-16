"use strict";
var Abagbe_4;
(function (Abagbe_4) {
    Abagbe_4.posibilityTop = [];
    Abagbe_4.posibilityMiddle = [];
    Abagbe_4.posibilityBottom = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    //cupcake 1
    let top1 = new Posibility("cupcake1 - Top", 0, path + "images/top1.png");
    let middle1 = new Posibility("cupcake1 - Middle", 1, path + "images/middle1.png");
    let bottom1 = new Posibility("cupcake1 - Bottom", 2, path + "images/bottom1.png");
    Abagbe_4.selectedElements = { top: Abagbe_4.posibilityTop[0], middle: Abagbe_4.posibilityMiddle[0], bottom: Abagbe_4.posibilityBottom[0] };
    //cupcake 2
    let top2 = new Posibility("cupcake2 - Top", 0, path + "images/top2.png");
    let middle2 = new Posibility("cupcake2 - Middle", 1, path + "images/middle2.png");
    let bottom2 = new Posibility("cupcake2 - Bottom", 2, path + "images/bottom2.png");
    //cupcake 3
    let top3 = new Posibility("cupcake3 - Top", 0, path + "images/top3.png");
    let middle3 = new Posibility("cupcake3 - Middle", 1, path + "images/middle3.png");
    let bottom3 = new Posibility("cupcake3 - Bottom", 2, path + "images/bottom3.png");
    allPosArrayFromJSON(allPosArrayToJSON());
    function allPosArrayToJSON() {
        let allPosArray = { top: Abagbe_4.posibilityTop, middle: Abagbe_4.posibilityMiddle, bottom: Abagbe_4.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        console.log(json);
        return json;
    }
    Abagbe_4.allPosArrayToJSON = allPosArrayToJSON;
    function allPosArrayFromJSON(jsonStr) {
        Abagbe_4.posibilityTop = [];
        Abagbe_4.posibilityMiddle = [];
        Abagbe_4.posibilityBottom = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posInterf = json[key];
                posInterf.forEach(pos => {
                    new Posibility(pos.name, pos.type, pos.link);
                });
            }
        });
    }
    Abagbe_4.allPosArrayFromJSON = allPosArrayFromJSON;
})(Abagbe_4 || (Abagbe_4 = {}));
//# sourceMappingURL=data.js.map