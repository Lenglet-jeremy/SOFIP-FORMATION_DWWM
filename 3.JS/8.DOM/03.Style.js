const parag = document.querySelector("p");
const img = document.querySelector("img");
const link = document.querySelector("a");
const input = document.querySelector("input");
const div = document.querySelector("div");
const span = document.querySelector("span");

image.style.width = "200px";
div.style.backgroundColor = "lightgrey";

// classlist
// div.classList.add("text-primary");
// div.classList.remove("text-primary");

setInterval(() => {
  div.classList.toggle("test");
}, 2000);
