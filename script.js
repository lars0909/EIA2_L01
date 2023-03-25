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
// console.log(subjekt);
// console.log(prädikat);
// console.log(objekt);
for (let i = 5; i >= 1; i--) {
    console.log(i);
    console.log(getVerse(subjekt, prädikat, objekt));
}
function getVerse(_subjekt, _prädikat, _objekt) {
    let test = "jesfhjdsh";
    return (test);
}
// let order = [0, 1, 2, 3, 4];
// let subjekt_reihenfolge: number[] = [];
// let verb_reihenfolge: number[] = [];
// let objekt_reihenfolge: number[] = [];
// function rdmindex(): number[] {         //FIsher Yates Shuffle
//     let b = 5, randomIndex;
//     while (b != 0) {
//         randomIndex = Math.floor(Math.random() * b);
//         b--;
//         [order[b], order[randomIndex]] = [order[randomIndex], order[b]];
//     }
//     return order;
// }
// function readpoem() {
//     for (let i = order.length - 1; i >= 0; i--) {
//         console.log(subjekt[subjekt_reihenfolge[i]] + prädikat[verb_reihenfolge[i]] + objekt[objekt_reihenfolge[i]]);
//     }
// };
// function rdmorder() {
//     rdmindex();
//     subjekt_reihenfolge = [...order];
//     rdmindex();
//     verb_reihenfolge = [...order];
//     rdmindex();
//     objekt_reihenfolge = [...order];
//     readpoem();
// }
// rdmorder();
//# sourceMappingURL=script.js.map