const a = "test";
console.log(typeof a, a);
const c = "Lune";

const systemes = `Planetes : \t "Venus, \n Mars, ` + c + `"`;
console.log(systemes);

const nom = "Formation web";
const display = `Bonjour, je suis ${nom} à Verquigneul ${62400 + 400}`;
console.log(display);

const planet = "Terre";
console.log(planet[2]);
console.log(planet.length);

const password = "12345";
if (password && password.length > 5) {
  console.log("Bienvenue sur notre site");
} else {
  console.log("Vous devez saisir un mot de passe d'au moins 5 caractéres");
}

console.log(password[password.length - 1]);
