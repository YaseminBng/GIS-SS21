"use strict";
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
/*let aufgabe1 zahl = multiply(2, 6);
function multiply(_a: zahl, _b: zahl): zahl{
    let antwort: zahl = _a * _b;
    return antwort;
  }
console.log(aufgabe1); */
//*A5b*//
/*let aufgabe2: zahl = max(1, 100);
function max(_a: zahl, _b: zahl): zahl{
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
/*for(let i:zahl =0; i<10;i++){
    Math.random();
    console.log(Math.random()* 100 +1);
}
*/
/*A5f*/
//# sourceMappingURL=script.js.map