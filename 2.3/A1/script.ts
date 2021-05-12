
let drawDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("drawingsurface");
drawDiv.style.position = "relative";
drawDiv.style.width = "800px";
drawDiv.style.height = "500px";
drawDiv.style.backgroundColor = "beige";

let newRectBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("newRect");
newRectBtn.addEventListener("click", newRect);

let resetBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");
resetBtn.addEventListener("click", reset);

let divs: HTMLDivElement[] = [];

function reset(): void {
    console.log("reset");
    divs.forEach(element => {
            drawDiv.removeChild(element);
        });
    divs = [];
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function newRect(): void {
    console.log("new rectangle");
    let rect: HTMLParagraphElement = document.createElement("div");
    rect.style.position = "absolute";
    rect.style.backgroundColor = "pink";
    rect.style.border = "solid";
    let width: number = getRandomInt(20, 200);
    let height: number = getRandomInt(20, 100);
    rect.style.width = width + "px";
    rect.style.height = height + "px";
    rect.style.top = getRandomInt(0, 500 - height) + "px";
    rect.style.left = getRandomInt(0, 800 - width) + "px";
    drawDiv.appendChild(rect);
    divs.push(rect);
}