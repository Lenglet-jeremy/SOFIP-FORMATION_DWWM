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

const ul = document.querySelector("ul");

const li = document.createElement("li");

const span = document.createElement("span");
span.classList.add("todo", "done");

const pBreakingBad = document.createElement("p");
pBreakingBad.innerText = "Breaking Bad";

const pTheWire = document.createElement("p");
pTheWire.innerText = "The Wire";

const buttonEdited = document.createElement("button");

const buttonSupprimer = document.createElement("button");
buttonSupprimer.classList.add("delete");

ul.append(li);
li.append(span);
li.append(pBreakingBad);
li.append(pTheWire);
li.append(buttonEdited);
li.append(buttonSupprimer);
