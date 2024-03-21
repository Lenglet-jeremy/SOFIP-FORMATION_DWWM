const parag = document.querySelector("p");
const img = document.querySelector("img");
const link = document.querySelector("a");
const input = document.querySelector("input");
const div = document.querySelector("div");
const span = document.querySelector("span");

// Ajoute du texte
// span.innerText += "Hello Span";

// Ajoute du HTML
span.innerHTML = "<h1>Coucou</h1>";

// Modifier un élément
image.src = "./02.img/desert.jpg";
image.alt = "desert";

// input.type = "date";

input.placeholder = "name";

input.focus();
setTimeout(() => {
  //   input.focus();
  input.disabled = true;
}, 3000);
