const car = {
  marque: "audi",
  couleur: "noire",
  annee: 2019,
};

console.log(car);
// Transformer en JSON
console.log(JSON.stringify(car));

console.log(
  JSON.parse(`{"lastName" : "Doe", "firstName" : "Jane", "age" : 27}`)
);

const books = [
  {
    title: "La nuit des temps",
    author: {
      name: "Barjavel",
    },
  },
  {
    title: "l'illiade",
  },
];

for (const book of books) {
  let writerName = book.author?.name;
  console.log(writerName);
}
