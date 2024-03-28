const ul = document.querySelector("ul");

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
  const currentName = series[index].name;
  console.log(currentName);


  const input = document.createElement("input");
  input.type = "text";
  input.value = series[index].name;


  const cancel = document.createElement("button");
  cancel.innerText = "Cancel";
  cancel.addEventListener("click", () =>{
    displaySeries();
  });


  const save = document.createElement("button");
  save.innerText = "Save";
  save.addEventListener("click", () => {
    if(input.value === ""){
      displaySeries();
    } else{
      series[index].name = input.value;
      displaySeries();
    }
    
  });


  li.append(input, save, cancel);
  ul.replaceChild(li, ul.children[index]);

}

displaySeries();