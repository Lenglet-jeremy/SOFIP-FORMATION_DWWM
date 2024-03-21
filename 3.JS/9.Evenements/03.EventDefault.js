const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click form");
  const value = input.value;
  console.log(value);
});

input.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Click input");
});

// Capture les evenement en temps réelle
input.addEventListener("keydown", (event) => {
  console.log(event.target.event);
});
