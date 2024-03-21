// On créer une référence comme point d'entrée
let app = document.querySelector("#app");

// Création l'élément main
let main = document.createElement("main");
// Création l'élément image
let image = document.createElement("img");
let ancre = document.createElement("a");
// Creation des attributs
let imageSrc = document.createAttribute("src");
let imageAlt = document.createAttribute("alt");
let imageWidth = document.createAttribute("width");

let ancreHref = document.createAttribute("href");

// Attribution de valeurs
imageSrc.value = "./04.img/Mountain.jpg";
imageAlt.value = "Mountain";
imageWidth.value = "200px";
image.setAttributeNode(imageSrc);
image.setAttributeNode(imageAlt);
image.setAttributeNode(imageWidth);

ancre.innerText = "Wikipedia";
ancreHref.value =
  "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";
ancre.setAttributeNode(ancreHref);

// Création l'élément parag
let parag = document.createElement("p");
parag.innerText = "Je suis un paragraphe";

// Création l'élément span
let span = document.createElement("span");
span.innerText = "NOURRITURE";

// Ajout des elements à la référence
app.appendChild(main);
main.append(image, parag, ancre);
parag.prepend(span);
