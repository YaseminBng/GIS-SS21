namespace Abgabe_4 {
    export let posibilityTop: Posibility[] = [];
    export let posibilityMiddle: Posibility[] = [];
    export let posibilityBottom: Posibility[] = [];

    //cupcake 1
    let top1: Posibility = new Posibility("cupcake1 - Top", 0, "images/top1.png");
    let middle1: Posibility = new Posibility("cupcake1 - Middle", 1, "images/middle1.png");
    let bottom1: Posibility = new Posibility("cupcake1 - Bottom", 2, "images/bottom1.png");

    //cupcake 2
    let top2: Posibility = new Posibility("cupcake2 - Top", 0, "images/top2.png");
    let middle2: Posibility = new Posibility("cupcake2 - Middle", 1, "images/middle2.png");
    let bottom2: Posibility = new Posibility("cupcake2 - Bottom", 2, "images/bottom2.png");

    //cupcake 3
    let top3: Posibility = new Posibility("cupcake3 - Top", 0, "images/top3.png");
    let middle3: Posibility = new Posibility("cupcake3 - Middle", 1, "images/middle3.png");
    let bottom3: Posibility = new Posibility("cupcake3 - Bottom", 2, "images/bottom3.png");



    allPosArrayFromJSON(allPosArrayToJSON());

    export function allPosArrayToJSON(): string {
        let allPosArray: AllPosArrayInterface = {top: posibilityTop, middle: posibilityMiddle, bottom: posibilityBottom };
        let json: string = JSON.stringify(allPosArray);
        console.log(json);
        return json;
    }

    export function allPosArrayFromJSON(jsonStr: string): void {
        posibilityTop = [];
        posibilityMiddle = [];
        posibilityBottom = [];
        let json: AllPosArrayInterface = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posInterf: PosibilityInterface[] = json[key];
                posInterf.forEach(pos => {
                    new Posibility(pos.name, pos.type, pos.link);
                });
            }
        });
    }

}