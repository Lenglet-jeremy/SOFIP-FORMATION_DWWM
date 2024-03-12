const phrase = "Hello world !";
console.log(phrase.endsWith("d!"));
console.log(phrase.startsWith("He"));
console.log(phrase.includes("lo"));
console.log(phrase.indexOf("lo"));
console.log(phrase.indexOf("y")); //Ne fait pas partie de la chaine

console.log(phrase.replace("world", "the earth"));
console.log(phrase.slice(2, 7));
const mail = "        admin@admin.fr      ";
console.log(mail);
console.log(mail.trim());
console.log(phrase.toUpperCase());
console.log(phrase.split());

// function sayHello(name) {
//   console.log("Hello " + name);
// }
// sayHello("Jean");
