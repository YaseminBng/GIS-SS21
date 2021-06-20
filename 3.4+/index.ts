namespace A3_4 {
    let buttonAbschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dAbschicken");
    buttonAbschicken.addEventListener("click", cAbschicken);

    let buttonErhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dErhalten");
    buttonErhalten.addEventListener("click", cErhalten);

    let buttonEnfernen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dEntfernen");
    buttonEnfernen.addEventListener("click", cEntfernen);

    async function cAbschicken(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://letsdothisgis20.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>form);
        url = url + "/abschicken" + "?" + query.toString();
        await fetch(url);
    }
    async function cErhalten(): Promise<void> {
        console.log("hey");
        //let url: string = "http://localhost:8100";
        let url: string = "https://letsdothisgis20.herokuapp.com";
        url = url + "/erhalten";
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let serverA: HTMLElement = <HTMLElement>document.getElementById("datenbank");
        serverA.innerHTML = ausgabe;
        console.log(ausgabe);

        (<HTMLElement>document.getElementById("datenbank")).innerHTML = ausgabe;
    }

    async function cEntfernen(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://letsdothisgis20.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>form);
        url = url + "/entfernen" + "?" + query.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let serverA: HTMLElement = <HTMLElement>document.getElementById("datenbank");
        serverA.innerHTML = ausgabe;
    }
}