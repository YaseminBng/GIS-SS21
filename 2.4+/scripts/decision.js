"use strict";
var Abgabe_4;
(function (Abgabe_4) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let imageTop = document.getElementById("imgTop");
    let imageMiddle = document.getElementById("imgMiddle");
    let imageBottom = document.getElementById("imgBottom");
    let btSave = document.getElementById("btSave");
    btSave.addEventListener("click", saveSelection);
    let btCancel = document.getElementById("btCancel");
    window.addEventListener("load", loadContent);
    function loadContent() {
        let json = sessionStorage.getItem(Abgabe_4.keyConfig);
        if (json != null) {
            Abgabe_4.selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = Abgabe_4.selectedElements.top;
            addDetailWindow(Abgabe_4.posibilityTop);
        }
        else if (path == "middle.html") {
            selected = Abgabe_4.selectedElements.middle;
            addDetailWindow(Abgabe_4.posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = Abgabe_4.selectedElements.bottom;
            addDetailWindow(Abgabe_4.posibilityBottom);
        }
        if (Abgabe_4.selectedElements.top == undefined || Abgabe_4.selectedElements.middle == undefined || Abgabe_4.selectedElements.bottom == undefined) {
            btSave.textContent = "next";
            btCancel.textContent = "back";
            if (path == "top.html") {
                btCancel.disabled = true;
            }
            btCancel.addEventListener("click", back);
        }
        else {
            btSave.textContent = "Save";
            btCancel.textContent = "Cancel";
            btCancel.addEventListener("click", cancel);
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
    function addDetailWindow(images) {
        let divToAdd = document.getElementById("imgDetailSec");
        images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function () {
                setSelected(img, imgElement);
            });
            divToAdd.appendChild(imgElement);
        });
    }
    function setSelected(img, imgElement) {
        selected = img;
        imgElement.className += " selectedImage";
        console.log("selected: " + img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }
    function saveSelection() {
        if (path == "top.html") {
            Abgabe_4.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            Abgabe_4.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            Abgabe_4.selectedElements.bottom = selected;
        }
        Abgabe_4.selectedToJSON();
        window.open("index.html", "_self");
        console.log("selected:" + selected.name);
    }
    function back() {
        let pathToOpen;
        if (path == "middle.html") {
            pathToOpen = "top.html";
        }
        else if (path === "bottom.html") {
            pathToOpen = "middle.html";
        }
        window.open(pathToOpen, "_self");
    }
    function cancel() {
        window.open("index.html", "_self");
        console.log("abbruch");
    }
})(Abgabe_4 || (Abgabe_4 = {}));
//# sourceMappingURL=decision.js.map