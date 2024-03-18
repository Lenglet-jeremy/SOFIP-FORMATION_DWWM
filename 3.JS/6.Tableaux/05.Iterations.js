const numbs = [2, 200, 35];

// for of
for (let n of numbs) {
  console.log(numbs);
}

// foreach
numbs.forEach((value, index) =>
  console.log(`value : ${value} | index : ${index}`)
);

// map
const hero = ["BATMAN", "SPIDER-MAN", "ANTMAN"];
const a = hero.map((value) => value.toLowerCase());
console.log(a);

const movies = [
  { title: "Interstellar", director: "C.Nolan", year: 2014 },
  { title: "Prisoners", director: "D.Villeneuve", year: 2013 },
  { title: "Gone Girl", director: "D.Fincher", year: 2014 },
];

const b = movies.map((value) => value.director);
console.log(b);
