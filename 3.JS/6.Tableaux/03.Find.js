const skills = ["HTML", "CSS", "JS", "PHP"];

// Récupere l'indice si la valeur existe sinon ce sera -1
console.log(skills.indexOf("PHP"));

const numbers = [1, 2, 3];

// .indexOf utilise le ===
console.log(numbers.indexOf("1"));

// Includes retourne un boolean
console.log(skills.includes("JS"));

const group = [{ name: "John" }, { name: "Bill" }, { name: "Tom" }];
// Retourne la clé valeur ou undefined
const index = group.findIndex((elem) => elem.name === "Johnny");
const obj = group.find((el) => el.name === "Tom");
console.log(index);
console.log(obj);

// Fusionner des tableaux
const softskills = ["Aimable", "Consciencieux"];
const allMySkills = [...skills, ...softskills];

console.log(allMySkills);
