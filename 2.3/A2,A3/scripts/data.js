"use strict";
var A2_3;
(function (A2_3) {
    A2_3.posibilityTop = [];
    A2_3.posibilityMiddle = [];
    A2_3.posibilityBottom = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    //cupcake 1
    let top1 = new A2_3.Posibility("cupcake1 - Top", 0, path + "images/top1.png");
    let middle1 = new A2_3.Posibility("cupcake1 - Middle", 1, path + "images/middle1.png");
    let bottom1 = new A2_3.Posibility("cupcake1 - Bottom", 2, path + "images/bottom1.png");
    A2_3.selectedElements = { top: A2_3.posibilityTop[0], middle: A2_3.posibilityMiddle[0], bottom: A2_3.posibilityBottom[0] };
    //cupcake 2
    let top2 = new A2_3.Posibility("cupcake2 - Top", 0, path + "images/top2.png");
    let middle2 = new A2_3.Posibility("cupcake2 - Middle", 1, path + "images/middle2.png");
    let bottom2 = new A2_3.Posibility("cupcake2 - Bottom", 2, path + "images/bottom2.png");
    //cupcake 3
    let top3 = new A2_3.Posibility("cupcake3 - Top", 0, path + "images/top3.png");
    let middle3 = new A2_3.Posibility("cupcake3 - Middle", 1, path + "images/middle3.png");
    let bottom3 = new A2_3.Posibility("cupcake3 - Bottom", 2, path + "images/bottom3.png");
})(A2_3 || (A2_3 = {}));
//# sourceMappingURL=data.js.map