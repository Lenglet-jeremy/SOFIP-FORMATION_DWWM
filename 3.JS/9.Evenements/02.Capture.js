const div = document.querySelector("div");
const span = document.querySelector("span");

div.addEventListener(
  "click",
  () => {
    console.log("div");
  },
  {
    capture: true,
  }
);

span.addEventListener(
  "click",
  () => {
    console.log("span");
  },
  {
    capture: true,
  }
);
