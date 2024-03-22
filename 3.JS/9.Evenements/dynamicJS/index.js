// tableau de données (simulation API ou de notre backend)

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

// tableau qui va stocker les articles du panier
let panier = [];

// création d'une référence
const articleContainer = document.querySelector(".articles-container");
//  création d'un point d'entré pour afficher le nombre d'articles dans le panier
const span = document.querySelector(".nbr");

// fonction principale qui va boucler sur les données
const displayArticle = () => {
  // on mapper sur nos données et stocker dans un tableau
  const articlesNode = articles.map((article, index) => {
    // a chaque tour de boucle on invoque la méthode qui crée un élément
    return createArticle(article, index);
  });
  //   on relie le tableau final à notre référence HTML
  articleContainer.append(...articlesNode);
};

// on va créer une fonction (Composant que l'on va voir avec React)
const createArticle = (article, index) => {
  // booléen pour la gestion du bouton
  let buttonState = true;
  const div = document.createElement("div");
  div.classList.add("article");

  const img = document.createElement("img");
  img.src = "./img/" + article.img;
  img.alt = "tv";

  const h2 = document.createElement("h2");
  h2.innerText = article.denomination;

  const p1 = document.createElement("p");
  p1.innerText = "DISPO : " + article.dispo;

  const div2 = document.createElement("div");
  div2.classList.add("article-action");

  const p2 = document.createElement("p");
  p2.innerText = article.price;

  const btn = document.createElement("button");
  btn.innerText = "Ajouter au panier";
  btn.classList.add("presentButton");
  btn.addEventListener("click", () => {
    buttonState = !buttonState;
    if (buttonState) {
      btn.innerText = "Ajouter au panier";
      btn.classList.add("presentButton");
      btn.classList.remove("deletedButton");
      // appeler une méthode pour supprimer l'article
      removeArticle(article);
    } else {
      btn.innerText = "Supprimer du panier";
      btn.classList.remove("presentButton");
      btn.classList.add("deletedButton");
      // appeler une méthode pour ajouter l'article
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

// ajout d'un article
function addArticle(article) {
  // console.log(article);
  panier.push(article);
  console.log(panier);
  if (panier.length === 0) {
    span.innerHTML = "";
  } else {
    span.innerHTML = panier.length;
  }
  totalPanier();
}

// supprimer un article
function removeArticle(article) {
  console.log(article.id);
  panier = panier.filter((item) => item.id !== article.id);
  console.log(panier);
  if (panier.length === 0) {
    span.innerHTML = "";
  } else {
    span.innerHTML = panier.length;
  }
  totalPanier();
}

function totalPanier() {
  const total = panier.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);
  console.log(total);
}

//  !important INVOQUER LA METHODE PRINCIPALE
displayArticle();
