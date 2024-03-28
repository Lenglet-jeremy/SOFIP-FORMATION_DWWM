const ul = document.querySelector("ul");

// références pour le formulaire et le champ de saisie
const form = document.querySelector("form");
const input = document.querySelector("input");

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

// écoute de l'événement submit sur le formulaire
form.addEventListener("submit", (event) => {
  // empêche le comportement par défaut : rechargement de la page
  event.preventDefault();
  // récupération de la valeur saisie
  const value = input.value;
  console.log(value);
  // reinitialisation du champ de saisie
  input.value = "";
  // invocation d'une méthode pour ajouter une série
  addSerie(value);
});

const displaySeries = () => {
  const seriesNode = series.map((serie, index) => {
    return createSerieElement(serie, index);
  });
  // on reinitialise le point d'entrée (le ul) pour ne pas avoir de doublons
  ul.innerHTML = "";
  ul.append(...seriesNode);
};

const createSerieElement = (serie, index) => {
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

// création de la méthode pour ajouter
const addSerie = (value) => {
  // ajout d'un objet avec la clé name qui correspond au nom de la série et la clé seen à false
  series.push({ name: value, seen: false });
  // on relance l'affichage avec invocation de la méthode principale
  displaySeries();
};

displaySeries();
