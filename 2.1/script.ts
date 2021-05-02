//*A1*//

/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1(): void {
    console.log("Klar?");
}
function func2(): void {
    console.log("Gute!");
}*/


//* A1a : ->"Alles" -> "Klar?" ->"Logo!" *//
//*Variablennamen: ERLAUBT: Ziffern, Buchstaben a-Z (groß und klein), _$ / NICHT: Schlüsselwörter und Beginn mit Ziffer, Leerzeichen und Bindestrich*//

//*A1b : Debugger Zeile 4 -> Zeile 5 -> Zeile 6 ->Zeile 12 -> 7 .*//

//*A2*//

/*function a2(): void {
    let i: number = 9;
    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}
a2();*/

/*  Es wird von der 9 immer 1 subtrahiert -> Console 8,7,6,5,4,3,2,1.
Wegen "while( i > 0)" stoppt es bei 1.

/* Debugger: Zeile 31 -> Zeile 32 -> Zeile 33 -> Wiederholung .... bis 0 dann ->37 (Beendet)

//*A3*/

/* A3a- Wenn man die Bezeichung von der function falsch schreibt bzw falsch aufruft wird ein Fehler angezeigt. 
Wenn bei console.log(x) in die Klammer was anderes als x steht, kann der Name nicht gefunden werden*/

/*A3b- Lidia Kifle hat es sich angeschaut*/

//*A4*//

/*let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void{
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
}*/

/* A4a -> Zeile 52 "Hallo" -> Zeile 53-> Zeile 59 -> "Bla" -> Zeile 54 "Hallo" ->Zeile 55 -> Zeile 64 -> Zeile 66 "Blubb" -> Zeile 56 -> Zeile 69,70 -> Zeile 57 "Test"
/*A4b Lokale Variablen existieren NUR lokal das heisst innerhalb einer Methode oder einer Block-Anweisung.
Gloable Variablen existieren global d.h. sind überall aufgreifbar/sichtbar:Methode,Konstruktor. ->JAVA Semester1
Übergabeparametern: Gibt an was eine Funktion nach einem Durchlauf weitergibt. void->nichts
Normale Variablen können nur mit bestimmten Datentypen deklariert werden -> String...
Eine Funktion kann aus mehrern unterschieliche Variablen und Datentypen bestehen. Ähnlichkeit: beide mit einen Variablennamen benannt werden und damit aufgerufen werden können
*/

//*A5*//
//*A5a*//

/*let aufgabe1 number = multiply(2, 6);
function multiply(_a: number, _b: number): number{
    let antwort: number = _a * _b;
    return antwort;
  }
console.log(aufgabe1); */

//*A5b*//

/*let aufgabe2: number = max(1, 100);
function max(_a: number, _b: number): number{
    if (_a > _b) 
    return _a;
    else 
    return _b;
}
console.log(aufgabe2);
*/

/*A5c*/

/*var x = 0, i = 1;
while (i <= 100) {
   x = x + i;
   i = i + 1;
}
console.log(x);
*/

/*A5d*/

/*for(let i:number =0; i<10;i++){
    Math.random();
    console.log(Math.random()* 100 +1);
}
*/

//*A5e*//
function factrorial(n: number): number {
    let fuct: number = 1;
    for (let i: number = 1; i <= n; i++) {
        fuct = fuct * i;
    }
    return fuct;
}

/*A5f*/
/* function leapyears():void {
    for (let i:number = 1900; i< 2021;i++) {
        if (i % 4 == 0 && i % 100 != 0 && i % 400 == 0) {
         console.log(i);
        } 
    }
     leapyears();
}
*/

//*A6*//
/*


//*A6a//*
for (var hash = "#"; hash.length <= 7; hash += "#") {
    console.log(hash);

} //* A6b_c //*
function fizzBuzz(num:number) {

    if (num % 5 == 0 && num % 3 == 0) return "fizzbuzz";
    if (num % 5 == 0) return "fizz";
    if (num % 3 == 0) return "buzz";
    return num;
}

for (var i = 1; i <= 100; i++) console.log(fizzBuzz(i)); /*

//* A6d*/
/*
let size: number = 8;
let output: string = "";
for (let zeile: number = 0; zeile < size; zeile++) {
    for (let spalte: number = 0; spalte < size; spalte++) {
        if ((zeile + spalte) % 2) {
            output = output + " ";
        } else {
            output = output + "#";
        }
    }
    output += "\n"; // neue Zeile 
}
/*
//* 6 e)*/
/*
output = "";
schachbrettmod(8, 8);
function schachbrettmod(sizeZ: number, sizeS: number): void {
    for (let zeile: number = 0; zeile < sizeZ; zeile++) {
        for (let spalte: number = 0; spalte < sizeS; spalte++) {
            if ((zeile + spalte) % 2) {
                output = output + " ";
            } else {
                output = output + "#";
            }
        }
        output += "\n";
    }
    console.log(output);
}

*/
