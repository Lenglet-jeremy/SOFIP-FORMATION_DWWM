// 1 Selectionner le point d'entree
const ul = document.querySelector("ul");

//Simulation API
// modification : il faut ajouter une clé de type booléen
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

// Créer une méthode qui affiche un input avec le nom de la serie et 2 boutons cancel et save
const createSerieElement = (serie, index) => {

  const li = document.createElement("li");
  

  const span = document.createElement("span");
  span.classList.add("todo");
  if (serie.seen) {
    span.classList.add("done");
  }
  span.addEventListener("click", () => {
    toggleSerie(index);
  });


  const p = document.createElement("p");
  p.innerText = serie.name;


  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";
  btnEdit.addEventListener("click", () => {
    editSerie(index);
  });


  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("delete");
  btnDelete.addEventListener("click", () => {
    deleteSerie(index);
  });

  li.append(span, p, btnEdit, btnDelete);

  return li;
};

// 3 Création de la méthode principale qui boucle sur le tableau de données
const displaySeries = () => {
  const seriesNode = series.map((serie, index) => {
    // placer une condition selon l'état de la nouvelle clé
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

const deleteSerie = (index) => {
  series.splice(index, 1);
  displaySeries();
};

const toggleSerie = (index) => {
  series[index].seen = !series[index].seen
  displaySeries();
};

const editSerie = (index) => {

  const li = document.createElement("li");

  const input = document.createElement("input");
  input.type = "text";
  input.innerText = series[index].name;

  const cancel = document.createElement("button");
  cancel.innerText = "Cancel";
  cancel.addEventListener("click", () =>{
    displaySeries();
  })

  const save = document.createElement("button");
  save.innerText = "Save";
  save.addEventListener("click", () => {
    series[index].name = input.value;
    displaySeries();
  })

  li.append(input, save, cancel);
  ul.replaceChild(li, ul.children[index]);


  // === V2 ===
  // const li = ul.children[index];

  // const span = li.querySelector('span');
  // span.style.display = 'none';

  // const p = li.querySelector('p');
  // const currentName = p.innerText;
  // console.log(currentName);

  // const input = document.createElement('input');
  // input.type = "type";
  // input.value = currentName;

  // li.replaceChild(input, p);
  // === V2 ===

  // === ChatGPT ===
  // const li = ul.children[index];
  // const span = li.querySelector('span'); // Sélectionne l'élément <span> à masquer
  // span.style.display = 'none'; // Masque l'élément <span>
  // const p = li.querySelector('p'); // Sélectionne l'élément <p> à éditer
  // const currentName = p.innerText; // Récupère le texte actuel
  // const input = document.createElement('input'); // Crée un élément input
  // input.type = 'text';
  // input.value = currentName; // Pré-remplit l'input avec le nom actuel
  // li.replaceChild(input, p); // Remplace le paragraphe par l'input

  // // Remplace le texte des boutons "Edit" et "Delete" par "Save" et "Cancel"
  // const btnEdit = li.querySelector('button');
  // btnEdit.innerText = 'Save';
  // btnEdit.addEventListener('click', () => {
  //   series[index].name = input.value; // Met à jour le nom de la série dans le tableau
  //   displaySeries(); // Actualise l'affichage
  // });

  // const btnDelete = li.querySelector('.delete');
  // btnDelete.innerText = 'Cancel';
  // btnDelete.addEventListener('click', () => {
  //   // Rétablit le paragraphe avec le nom précédent
  //   li.replaceChild(p, input);
  // });
  // === /ChatGPT ===
}

//Modification
// Créer une méthode qui switche la nouvele clé du tableau : voir juste ci-dessus

// Créer une methode qui vas prendre en charge la modification
// Modifier le nom

displaySeries();
