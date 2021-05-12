namespace A2_3 {
    export let posibilityTop: Posibility[] = [];
    export let posibilityMiddle: Posibility[] = [];
    export let posibilityBottom: Posibility[] = [];
    
    let path: string = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    
    //cupcake 1
    let top1: Posibility = new Posibility("cupcake1 - Top", 0, path + "images/top1.png");
    let middle1: Posibility = new Posibility("cupcake1 - Middle", 1, path + "images/middle1.png");
    let bottom1: Posibility = new Posibility("cupcake1 - Bottom", 2, path + "images/bottom1.png");
    
    export let selectedElements: Selected = {top: posibilityTop[0], middle: posibilityMiddle[0], bottom: posibilityBottom[0]};
    
    //cupcake 2
    let top2: Posibility = new Posibility("cupcake2 - Top", 0, path + "images/top2.png");
    let middle2: Posibility = new Posibility("cupcake2 - Middle", 1, path + "images/middle2.png");
    let bottom2: Posibility = new Posibility("cupcake2 - Bottom", 2, path + "images/bottom2.png");
    
    //cupcake 3
    let top3: Posibility = new Posibility("cupcake3 - Top", 0, path + "images/top3.png");
    let middle3: Posibility = new Posibility("cupcake3 - Middle", 1, path + "images/middle3.png");
    let bottom3: Posibility = new Posibility("cupcake3 - Bottom", 2, path + "images/bottom3.png");
    
    }