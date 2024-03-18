// let tab = [8, 16, 43, 23, 1, 15];
// let tabTrier = [];

// for (let i = 0; i < tab.length; i++) {
//   for (let ii = 0; ii < tab.length; ii++) {
//     if (tab[ii] < tab[i]) {
//       tabTrier[i] = tab[ii];
//       tab.splice(ii, 1);
//     }
//   }
// }

// console.log(tabTrier);

// Coorection !!!

let tab = [8, 16, 43, 23, 1, 15];
console.log(tab);
let tabTrier = [];
let index2;
for (let i = 0; i < tab.length; i++) {
  index2 = 0;
  for (let j = 0; j < tab.length; j++)
    if (tab[i] > tab[j]) {
      index2++;
    }
  tabTrier[index2] = tab[i];
}

console.log(tabTrier);
