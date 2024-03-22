// Tableau de données (simulation API ou de notre backend)

const articles = [
  {
    id: 1,
    denomination: "LG 55 - TV OLED 4K - 139cm",
    marque: "LG",
    resolution: "OLED",
    taille: 55,
    dispo: "EN STOCK",
    price: 1299.95,
    img: "lg 55 oled.jpg",
  },
  {
    id: 2,
    denomination: "HISENSE 32 - TV LED HD - 80cm",
    marque: "HISENSE",
    resolution: "HD",
    taille: 32,
    dispo: "STOCK EPUISE",
    price: 199.96,
    img: "hisense 32 hd.jpg",
  },
  {
    id: 3,
    denomination: "PANASONIC 55 - TV OLED 4K - 139cm",
    marque: "PANASONIC",
    resolution: "OLED",
    taille: 55,
    dispo: "EN STOCK",
    price: 1189.0,
    img: "panasonic 55 oled.jpg",
  },
];

// Tableau qui va stocker les articles du panier
let panier = [];

//Création d'une référence
const articleContainer = document.querySelector(".articles-container");
// Fonction principale qui va boucler sur les données

const span = document.querySelector(".nbr");

const displayArticle = () => {
  // On mapper sur nos données et stocker dans un tableau
  const articleNode = articles.map((articles) => {
    return createArticle(articles);
  });
  article.append(...articleNode);
};

// Création d'une référence
const article = document.querySelector(".articles-container");

// On créer une fonction (Composant que l'on va avec react)
const createArticle = (article) => {
  let buttonState = true;
  const div = document.createElement("div");
  div.classList.add("article");

  const img = document.createElement("img");
  img.src = "./img/" + article.img;
  img.alt = "tv";

  const h2 = document.createElement("h2");
  h2.innerText = article.denomination;

  const p1 = document.createElement("p");
  p1.innerText = article.dispo;

  const div2 = document.createElement("div");
  div2.classList.add("article-action");

  const p2 = document.createElement("p");
  p2.innerText = article.price;

  const btn = document.createElement("button");
  btn.innerText = "Ajouter au panier";
  btn.classList.add("PresentButton");
  btn.addEventListener("click", () => {
    buttonState = !buttonState;
    if (buttonState) {
      btn.innerText = "Ajouter au panier";
      btn.classList.add("PresentButton");
      btn.classList.remove("deletedButton");
      // Appeler une methode pour supprimer l'article
      removeArticle(article);
    } else {
      btn.innerText = "Supprimer au panier";
      btn.classList.remove("PresentButton");
      btn.classList.add("deletedButton");
      // Appeler une methode pour ajouter l'article
      addArticle(article);
    }
  });

  if (article.dispo === "STOCK EPUISE") {
    p1.style.color = "red";
    btn.disabled = true;
    btn.style.backgroundColor = "grey";
    btn.style.color = "black";
  }

  div2.append(p2, btn);
  div.append(img, h2, p1, div2);

  return div;
};

// Methode pour ajouter article
function addArticle(article) {
  console.log(article);
  panier.push(article);
  console.log(panier);
  if (panier.length === 0) {
    span.innerText = "";
  } else {
    span.innerText = panier.length;
  }
}

function removeArticle(article) {
  console.log(article.id);
  panier = panier.filter((item) => item.id !== article.id);
  console.log(panier);
  if (panier.length === 0) {
    span.innerText = "";
  } else {
    span.innerText = panier.length;
  }
}

function totalPanier() {
  const total = panier.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);
  console.log(total);
}

// ! IMPORTANT : Invoquer la fonction !
displayArticle();
