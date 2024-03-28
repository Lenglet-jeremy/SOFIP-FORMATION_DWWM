// 1 Selectionner le point d'entrée
const ul = document.querySelector("ul");

// simulation API
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

// 3 Création de la méthode principale qui boucle sur le tableau de données
const displaySeries = () => {
  const seriesNode = series.map((serie, index) => {
    return createSerieElement(serie, index);
  });
  ul.append(...seriesNode);
};

// 2 créer la méthode qui affiche un élément
const createSerieElement = (serie, index) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("todo");
  //   condition si la série a été vu
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

// 4 invocation de la série principale
displaySeries();
