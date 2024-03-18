let tab = [12, 8, 15, 19, 7, 11];

let somme = 0;
let moyenne = 0;

for (let i = 0; i < tab.length; i++) {
  somme += tab[i];
}

console.log(somme);
console.log(somme / tab.length);
