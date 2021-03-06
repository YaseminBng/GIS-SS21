"use strict";
var A2_3;
(function (A2_3) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    window.addEventListener("load", loadContent);
    function loadContent() {
        if (path == "top.html") {
            selected = A2_3.selectedElements.top;
            addDetailWindow(A2_3.posibilityTop);
        }
        else if (path == "middle.html") {
            addDetailWindow(A2_3.posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = A2_3.selectedElements.bottom;
            addDetailWindow(A2_3.posibilityBottom);
        }
    }
    function addDetailWindow(images) {
        let divToAdd = document.getElementById("imgDetailSec");
        images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.className += "detailImg";
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
    let btSave = document.getElementById("btSave");
    btSave.addEventListener("click", saveSelection);
    let btCancel = document.getElementById("btCancel");
    btCancel.addEventListener("click", cancelSelection);
    function saveSelection() {
        if (path == "top.html") {
            A2_3.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            A2_3.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            A2_3.selectedElements.bottom = selected;
        }
        window.open("index.html", "_self");
        console.log("selected " + selected.name);
    }
    function cancelSelection() {
        window.open("index.html", "_self");
        console.log("cancel");
    }
})(A2_3 || (A2_3 = {}));
//# sourceMappingURL=decision.js.map