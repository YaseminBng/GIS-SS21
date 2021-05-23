
namespace Abgabe_5 {
    let selected: Posibility;
    let htmlImgs: HTMLImageElement[] = [];
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

    let imageTop: HTMLImageElement = <HTMLImageElement>document.getElementById("imgTop");
    let imageMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("imgMiddle");
    let imageBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("imgBottom");

    let btSave: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btSave");
    btSave.addEventListener("click", saveSelection);
    let btCancel: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btCancel");

    window.addEventListener("load", loadContent);

    async function loadContent(): Promise<void> {

        await getPossibilitysFromURL("data.json");
        let json: string = sessionStorage.getItem(keyConfig);
        if (json != null) {
            selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = selectedElements.top;
            addDetailWindow(posibilityTop);
        } else if (path == "middle.html") {
            selected = selectedElements.middle;
            addDetailWindow(posibilityMiddle);
        } else if (path == "bottom.html") {
            selected = selectedElements.bottom;
            addDetailWindow(posibilityBottom);
        }


        if (selectedElements.top == undefined || selectedElements.middle == undefined || selectedElements.bottom == undefined) {
            btSave.textContent = "next";
            btCancel.textContent = "back";
            if (path == "top.html") {
                btCancel.disabled = true;
            }
            btCancel.addEventListener("click", back);
        } else {
            btSave.textContent = "Save";
            btCancel.textContent = "Cancel";
            btCancel.addEventListener("click", cancel);
        }
    }


    function loadImages(): void {
        if (selectedElements.top != undefined) {
            imageTop.src = selectedElements.top.link;
        }
        if (selectedElements.middle != undefined) {
            imageMiddle.src = selectedElements.middle.link;
        }
        if (selectedElements.bottom != undefined) {
            imageBottom.src = selectedElements.bottom.link;
        }
        console.log(selectedElements);
    }

    function addDetailWindow(_images: Posibility[]): void {
        let divToAdd: HTMLImageElement = <HTMLImageElement>document.getElementById("imgDetailSec");
        _images.forEach(img => {
            let imgElement: HTMLImageElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function (): void {
                setSelected(img, imgElement);
            });

            divToAdd.appendChild(imgElement);
        });
    }

    function setSelected(_img: Posibility, _imgElement: HTMLImageElement): void {
        selected = _img;
        _imgElement.className += " selectedImage";
        console.log("selected: " + _img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != _imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }


    function saveSelection(): void {
        if (path == "top.html") {
            selectedElements.top = selected;
        } else if (path == "middle.html") {
            selectedElements.middle = selected;
        } else if (path == "bottom.html") {
            selectedElements.bottom = selected;
        }
        selectedToJSON();
        window.open("index.html", "_self");
        console.log("selected:" + selected.name);
    }

    function back(): void {
        let pathToOpen: string;
        if (path == "middle.html") {
            pathToOpen = "top.html";
        } else if (path == "bottom.html") {
            pathToOpen = "middle.html";
        }
        window.open(pathToOpen, "_self");
    }

    function cancel(): void {
        window.open("index.html", "_self");
        console.log("Cancel");
    }


}