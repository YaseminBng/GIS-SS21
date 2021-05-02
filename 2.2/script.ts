//A1_a//

console.log("Die kleinste Zahl ist: " + min(10, 80, -15, -100, 53));

function min(...nummer: number[]): number {
    let minimum: number = nummer[0];
    for (let i: number = 0; i < nummer.length; i++) {
        const nextNr: number = nummer[i];
        if (nextNr < minimum) {
            minimum = nextNr;
        }
    }
    return minimum;
}

//A1_b//

function isEven(n: number): boolean {

    if (n < 0) {
        n = 0 - n;     /* negative Zahlen->  positiv (sonst fehler) */
    }

    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);
    }

}

console.log("Ist die Zahl 50 gerade?" + isEven(50));
console.log("Ist die Zahl 75 gerade?" + isEven(75));
console.log("Ist die Zahl -1 gerade? " + isEven(-1));


//A1_c_1-4//
/*
interface Student {
    Vorname: string;
    Nachname: String;
    Matrikelnummer: number;
    Studiengang: String;  
}

let studentRose: Student = {Vorname: "Rose", Nachname: "R", Matrikelnummer: 1234, Studiengang: "OMB" };
let studentJasmin: Student = {Vorname: "Jasmin", Nachname: "J", Matrikelnummer: 5678, Studiengang: "OMB"};
let studentLilie:  Student = {Vorname: "Lilie",  Nachname: "L", Matrikelnummer: 91011, Studiengang: "MKB"}; 

let studentArray: Student[] = [studentRose, studentJasmin, studentLilie];
studentArray.push({Vorname: "Clover", Nachname: "C", Matrikelnummer: 1213, Studiengang: "MKB"}); 
console.log( "Der/Die Studierende" + studentRose.Vorname + " " + studentRose.Nachname + " " + studentRose.Studiengang + "ist im 1.Semester");

for (const studi of studentArray) {
    showInfo(studi);
}
function showInfo(student: Student): void {
    console.log("Vorname: " +         student.Vorname + " ");
    console.log("Nachnname: " +       student.Nachname + " ");
    console.log("Matrikelnummer: " +  student.Matrikelnummer + " ");
    console.log("Studiengang " +      student.Studiengang + " ");
}
*/

//A1_c_5 //

class Student {
    studentVorname: String;
    studentNachname: String;
    studentMatrikelnummer: number;
    studentStudiengang: String;

    constructor(_studentVorname: String, _studentNachname: String, _studentMatrikelnummer: number, _studentStudiengang: String) {
        this.studentVorname = _studentVorname;
        this.studentNachname = _studentNachname;
        this.studentMatrikelnummer = _studentMatrikelnummer;
        this.studentStudiengang = _studentStudiengang;
    }

    showInfo(): void {
        console.log("Vorname: " + this.studentVorname + " ");
        console.log("Nachnname: " + this.studentNachname + " ");
        console.log("Matrikelnummer: " + this.studentMatrikelnummer + " ");
        console.log("Studiengang " + this.studentStudiengang + " ");
    }

}
let studentIvy: Student = new Student("Ivy", "I", 1415, "OMB");
studentIvy.showInfo();

//A2_a//

function backwards(array: number[]): number[] {
    let backwardArray: number[] = [];
    for (let i: number = array.length - 1; i >= 0; i--) {
        backwardArray[i] = array[array.length - i - 1];
    }
    return backwardArray;
}

//A2_b//

function join(...arrays: number[][]): number[] {
    let backArray: number[] = [];
    let vorArray: number = 0;
    arrays.forEach(array => {
        for (let i: number = 0; i < array.length; i++) {
            backArray[vorArray] = array[i];
            vorArray++;
        }
    });
    return backArray;
}
//A2_c // 

function split(array: number[], number1: number, number2: number): number[] {
    if (number1 < 0 || number2 < 0) {
        return undefined;
    } else if (number2 < number1) {
        let temp: number = number1;
        number1 = number2;
        number2 = temp;
    } else if (number2 > array.length) {
        return undefined;
    }
    let backArray: number[] = [];
    let index: number = 0;
    for (let i: number = number1; i <= number2; i++) {
        backArray[index] = array[i];
        i++;
    }
    return backArray;
}

//A2_Test //
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c)


//A3//
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

// Grass
context.fillStyle = "green";
context.fillRect(0, 300, 700, 200);

// Himmel
context.fillStyle = "lightblue";
context.fillRect(0, 0, 700, 300);


// Haus
//Wand
context.fillStyle = "beige";
context.fillRect(450, 250, 200, 200);
context.beginPath();

//Dach
context.fillStyle = "blue";
context.moveTo(450, 250);
context.lineTo(650, 250);
context.lineTo(550, 70);
context.fill();
context.closePath();

// Baum
context.fillStyle = "brown";
context.fillRect(300, 180, 40, 300);
context.beginPath();
context.fillStyle = "lightgreen";
context.arc(300, 150, 90, 0, 90);
context.fill();
context.closePath();

//A3_bcd
class Rechteck {
    x1: number;
    x2: number;
    y1: number;
    y2: number;

    maxWidth: number = 200;
    maxHeight: number = 300;

    constructor() {
        this.x1 = this.random(0, this.maxWidth);
        this.x2 = this.random(this.x1, this.maxWidth);
        this.y1 = this.random(0, this.maxHeight);
        this.y2 = this.random(this.y1, this.maxHeight);
    }

    random(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    drawRect(): void {
        context.beginPath();
        context.lineWidth = 15;
        context.fillStyle = "black";
        context.strokeStyle = "black";
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineTo(this.x1, this.y2);
        context.closePath();
        context.stroke();
        context.fill();
        context.closePath();
    }
}

let rechtArray: Rechteck[] = [new Rechteck(), new Rechteck(), new Rechteck()];
for (const recht of rechtArray) {
    recht.drawRect();
}