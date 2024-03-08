let name = "John";
let age = 19;

// if (name === "John") {
//   if (age > 17) {
//     console.log("Tu es majeur, viendais faire la fête");
//   } else {
//     console.log("Tu es mineur");
//   }
//   console.log("Welcome John");
// } else {
//   console.log("What's your name ?");
// }

const note = prompt("Quel est votre note ?");

if (note <= 20 && note >= 15) {
  alert("Reçu avec mention");
} else if (note < 15 && note >= 10) {
  alert("Reçu, tu aurais pu mieux faire.");
} else if (note < 10 && note >= 0) {
  alert("Tu es vraiment un gros naze");
} else {
  alert("Mytho !");
}
