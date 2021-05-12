"use strict";
let drawDiv = document.getElementById("drawingsurface");
drawDiv.style.position = "relative";
drawDiv.style.width = "800px";
drawDiv.style.height = "500px";
drawDiv.style.backgroundColor = "beige";
let newRectBtn = document.getElementById("newRect");
newRectBtn.addEventListener("click", newRect);
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);
let divs = [];
function reset() {
    console.log("reset");
    divs.forEach(element => {
        drawDiv.removeChild(element);
    });
    divs = [];
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function newRect() {
    console.log("new rectangle");
    let rect = document.createElement("div");
    rect.style.position = "absolute";
    rect.style.backgroundColor = "pink";
    rect.style.border = "solid";
    let width = getRandomInt(20, 200);
    let height = getRandomInt(20, 100);
    rect.style.width = width + "px";
    rect.style.height = height + "px";
    rect.style.top = getRandomInt(0, 500 - height) + "px";
    rect.style.left = getRandomInt(0, 800 - width) + "px";
    drawDiv.appendChild(rect);
    divs.push(rect);
}
//# sourceMappingURL=script.js.map