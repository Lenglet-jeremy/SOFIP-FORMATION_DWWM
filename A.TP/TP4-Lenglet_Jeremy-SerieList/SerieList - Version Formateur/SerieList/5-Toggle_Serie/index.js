const ul = document.querySelector("ul");

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  console.log(value);
  input.value = "";

  addSerie(value);
});

const displaySeries = () => {
  const seriesNode = series.map((serie, index) => {
    return createSerieElement(serie, index);
  });
  ul.innerHTML = "";
  ul.append(...seriesNode);
};

const createSerieElement = (serie, index) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("todo");
  span.addEventListener("click", () => {
    toggleSerie(index);
  });
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
  btnDelete.addEventListener("click", () => {
    deleteSerie(index);
  });
  li.append(span, p, btnEdit, btnDelete);
  return li;
};

const addSerie = (value) => {
  series.push({ name: value, seen: false });
  displaySeries();
};

const deleteSerie = (index) => {
  console.log(index);
  series.splice(index, 1);
  displaySeries();
};
const toggleSerie = (index) => {
  console.log(index);
  series[index].seen = !series[index].seen;
  displaySeries();
};

displaySeries();
