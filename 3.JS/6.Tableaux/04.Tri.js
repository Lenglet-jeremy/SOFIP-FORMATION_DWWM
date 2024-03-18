let tab = [8, 16, 43, 23, 1, 15];
// Par ordre croissant
const newTab = tab.sort((a, b) => a - b);
// Par ordre décroissant
const newTab2 = tab.sort((a, b) => b - a);
console.log(newTab);
console.log(newTab2);

// Trier sur un tableau d'objets
const students = [
  { age: 21, name: "Jane" },
  { age: 34, name: "Mary" },
  { age: 25, name: "Peter" },
];
const ageStudent = students.sort((a, b) => a.age);
console.log(ageStudent);

const firstName = ["lille", "lens", "berlin", "Santiago"];
console.log(firstName.sort());
