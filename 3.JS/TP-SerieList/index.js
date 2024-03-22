//Simulation API
const series = [
  {
    name: "Breaking Bad",
    seen: false,
  },
  {
    name: "The Wire",
    seen: true,
  },
];
// 1 Selectionner le point d'entree
const ul = document.querySelector("ul");

// 2 Créer la méthode qui affiche un élément
const createSerieElement = (serie, index) => {
  console.log(serie.name);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("todo");

  if (serie.seen) {
    span.classList.add("done");
  }
  const p = document.createElement("p");
  p.innerText = serie.name;

  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("delete");

  li.append(span, p, btnEdit, btnDelete);

  return li;
};

// 3 Création de la méthode principale qui boucle sur le tableau de données
const displaySeries = () => {
  const seriesNode = series.map((serie, index) => {
    return createSerieElement(serie, index);
  });
  ul.innerText = "";
  ul.append(...seriesNode);
};

const form = document.querySelector("form");
const input = document.querySelector("input");
let value = "";

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empeche le rechargement par defaut
  value = input.value;
  console.log(value);
  input.value = "";
  addSerie(value);
});

const addSerie = (value) => {
  series.push({ name: value, seen: false });
  displaySeries();
};

// series étant un tableau, ajouter la valeur entré par l'utilisateur et seen = false dans un nouvel index
// Dans le createSerieElement prendre en compte la gestion des doublons

displaySeries();
