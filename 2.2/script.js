"use strict";
//A1_a//
console.log("Die kleinste Zahl ist: " + min(10, 80, -15, -100, 53));
function min(...nummer) {
    let minimum = nummer[0];
    for (let i = 0; i < nummer.length; i++) {
        const nextNr = nummer[i];
        if (nextNr < minimum) {
            minimum = nextNr;
        }
    }
    return minimum;
}
//A1_b//
function isEven(n) {
    if (n < 0) {
        n = 0 - n; /* negative Zahlen->  positiv (sonst fehler) */
    }
    if (n == 0) {
        return true;
    }
    else if (n == 1) {
        return false;
    }
    else {
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
    constructor(_studentVorname, _studentNachname, _studentMatrikelnummer, _studentStudiengang) {
        this.studentVorname = _studentVorname;
        this.studentNachname = _studentNachname;
        this.studentMatrikelnummer = _studentMatrikelnummer;
        this.studentStudiengang = _studentStudiengang;
    }
    showInfo() {
        console.log("Vorname: " + this.studentVorname + " ");
        console.log("Nachnname: " + this.studentNachname + " ");
        console.log("Matrikelnummer: " + this.studentMatrikelnummer + " ");
        console.log("Studiengang " + this.studentStudiengang + " ");
    }
}
let studentIvy = new Student("Ivy", "I", 1415, "OMB");
studentIvy.showInfo();
//A2_a//
function backwards(array) {
    let backwardArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        backwardArray[i] = array[array.length - i - 1];
    }
    return backwardArray;
}
//A2_b//
function join(...arrays) {
    let backArray = [];
    let vorArray = 0;
    arrays.forEach(array => {
        for (let i = 0; i < array.length; i++) {
            backArray[vorArray] = array[i];
            vorArray++;
        }
    });
    return backArray;
}
//A2_c // 
function split(array, number1, number2) {
    if (number1 < 0 || number2 < 0) {
        return undefined;
    }
    else if (number2 < number1) {
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    else if (number2 > array.length) {
        return undefined;
    }
    let backArray = [];
    let index = 0;
    for (let i = number1; i <= number2; i++) {
        backArray[index] = array[i];
        i++;
    }
    return backArray;
}
//A2_Test //
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0)); // Bonus c)
console.log(split(arr, -1, 2)); // Bonus c)
console.log(split(arr, 0, 7)); // Bonus c)


//A3//
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
// Himmel
context.fillStyle = "lightblue";
context.fillRect(0, 0, 800, 600);
//# sourceMappingURL=script.js.map