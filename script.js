/*
Aufgabe: L01_Zufallsgedicht
Name: Lars Riehle
Matrikel: 272305
Datum: 23.03.2023
Quellen: Fisher Yates Shuffle
*/
let subjekt = ["Obi Wan ", "Anakin ", "Yoda ", "Darth Vader ", "Grogu "];
let prädikat = ["zerstört ", "liebt ", "hasst ", "verehrt ", "verachtet "];
let objekt = ["Raumschiffe", "Planeten", "die Sith", "die Jedi", "Kinder"];
let order = [0, 1, 2, 3, 4];
let subjekt_reihenfolge = [];
let verb_reihenfolge = [];
let objekt_reihenfolge = [];
function rdmindex() {
    let b = 5, randomIndex;
    while (b != 0) {
        randomIndex = Math.floor(Math.random() * b);
        b--;
        [order[b], order[randomIndex]] = [order[randomIndex], order[b]];
    }
    return order;
}
function readpoem() {
    console.log("test");
    console.log(subjekt_reihenfolge);
    console.log(subjekt[1]);
}
;
function rdmorder() {
    rdmindex();
    subjekt_reihenfolge = [...order];
    rdmindex();
    verb_reihenfolge = [...order];
    rdmindex();
    objekt_reihenfolge = [...order];
    console.log(subjekt[subjekt_reihenfolge[0]] + prädikat[verb_reihenfolge[0]] + objekt[objekt_reihenfolge[0]]);
    console.log(subjekt[subjekt_reihenfolge[1]] + prädikat[verb_reihenfolge[1]] + objekt[objekt_reihenfolge[1]]);
    console.log(subjekt[subjekt_reihenfolge[2]] + prädikat[verb_reihenfolge[2]] + objekt[objekt_reihenfolge[2]]);
    console.log(subjekt[subjekt_reihenfolge[3]] + prädikat[verb_reihenfolge[3]] + objekt[objekt_reihenfolge[3]]);
    console.log(subjekt[subjekt_reihenfolge[4]] + prädikat[verb_reihenfolge[4]] + objekt[objekt_reihenfolge[4]]); //readpoem();
}
rdmorder();
//# sourceMappingURL=script.js.map