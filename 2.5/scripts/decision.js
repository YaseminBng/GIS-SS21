"use strict";
var Abgabe_5;
(function (Abgabe_5) {
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
    async function loadContent() {
        await Abgabe_5.getPossibilitysFromURL("data.json");
        let json = sessionStorage.getItem(Abgabe_5.keyConfig);
        if (json != null) {
            Abgabe_5.selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = Abgabe_5.selectedElements.top;
            addDetailWindow(Abgabe_5.posibilityTop);
        }
        else if (path == "middle.html") {
            selected = Abgabe_5.selectedElements.middle;
            addDetailWindow(Abgabe_5.posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = Abgabe_5.selectedElements.bottom;
            addDetailWindow(Abgabe_5.posibilityBottom);
        }
        if (Abgabe_5.selectedElements.top == undefined || Abgabe_5.selectedElements.middle == undefined || Abgabe_5.selectedElements.bottom == undefined) {
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
        if (Abgabe_5.selectedElements.top != undefined) {
            imageTop.src = Abgabe_5.selectedElements.top.link;
        }
        if (Abgabe_5.selectedElements.middle != undefined) {
            imageMiddle.src = Abgabe_5.selectedElements.middle.link;
        }
        if (Abgabe_5.selectedElements.bottom != undefined) {
            imageBottom.src = Abgabe_5.selectedElements.bottom.link;
        }
        console.log(Abgabe_5.selectedElements);
    }
    function addDetailWindow(_images) {
        let divToAdd = document.getElementById("imgDetailSec");
        _images.forEach(img => {
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
    function setSelected(_img, _imgElement) {
        selected = _img;
        _imgElement.className += " selectedImage";
        console.log("selected: " + _img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != _imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }
    function saveSelection() {
        if (path == "top.html") {
            Abgabe_5.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            Abgabe_5.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            Abgabe_5.selectedElements.bottom = selected;
        }
        Abgabe_5.selectedToJSON();
        window.open("index.html", "_self");
        console.log("selected:" + selected.name);
    }
    function back() {
        let pathToOpen;
        if (path == "middle.html") {
            pathToOpen = "top.html";
        }
        else if (path == "bottom.html") {
            pathToOpen = "middle.html";
        }
        window.open(pathToOpen, "_self");
    }
    function cancel() {
        window.open("index.html", "_self");
        console.log("Cancel");
    }
})(Abgabe_5 || (Abgabe_5 = {}));
//# sourceMappingURL=decision.js.map