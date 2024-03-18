// Décomposition
let tab = [0, 12, 14, 5, 20];
const [note1, note2, note3] = tab;

// Modification
tab[0] = 5;
console.log(tab);

// Ajout de valeur en début de tableau.
tab.unshift(-7, 99);
console.log(tab);

// Ajout en fin de tableau
tab.push(144);
console.log(tab);

// Avec spread
tab = [13, ...tab, 11];
console.log(tab);

// Avec Splice
// Pour supprimer, on fournit le nombre de départ et le nombre d'éléments
tab.splice(2, 3);
// Pour ajouter les valeurs 45, 33 et 188 au début du tableau
tab.splice(2, 0, 45, 33, 188);
console.log(tab);

// Pour supprimer le premier élément
tab.shift();
// Pour supprimer le dernier element
tab.pop();
