const div = document.querySelector(".test");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const DarkMode = document.querySelector(".DarkMode");

function changeColor() {
  div.style.backgroundColor = "red";
}

div.addEventListener("mouseover", changeColor);

div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "orange";
});

let clicked = true;
btn.addEventListener("click", () => {
  if (clicked) {
    div.style.width = "300px";
    div.style.height = "300px";
  } else {
    div.style.width = "200px";
    div.style.height = "200px";
  }
  clicked = !clicked;
});

let DMClicked = true;
DarkMode.addEventListener("click", () => {
  if (DMClicked) {
    body.style.backgroundColor = "black";
    div.style.backgroundColor = "white";
    DarkMode.innerText = "Light Mode";
  } else {
    body.style.backgroundColor = "white";
    div.style.backgroundColor = "orange";
    DarkMode.innerText = "Dark Mode";
  }
  DMClicked = !DMClicked;
});
