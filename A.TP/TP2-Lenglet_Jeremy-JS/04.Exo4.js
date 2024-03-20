//Saisie des articles de l'utilisateurlet achatUtilisateur = -1;
let achatsUtilisateur = [];
let nombreAchat = 0;

do {
  achatUtilisateur = Number(prompt(
                            `Veuillez entrer le montant de votre achat.\n` +
                            `Saisisez 0 pour terminer`));

  achatsUtilisateur[nombreAchat] = achatUtilisateur;
  nombreAchat++;

} while (achatUtilisateur !== 0);

// Calcul de la somme des achat de l'utilisateur
let sommeAchatUtilisateur = 0;

for (let i = 0 ; i < achatsUtilisateur.length ; i++){
  sommeAchatUtilisateur += achatsUtilisateur[i];
}

// Paiement utilisateur
let sommeDonneeUtilisateur = 0;
let monnaieARendre = 0;
do{
  sommeDonneeUtilisateur = Number(prompt("Quelle somme donnez-vous à la caissiere ?"));
  monnaieARendre = sommeDonneeUtilisateur - sommeAchatUtilisateur;

  if(monnaieARendre < 0){
    alert("Il manque : " + (monnaieARendre * -1 ) + " €");
  }

}while(monnaieARendre < 0);


// Si le compte est bon, on sort du programme
if(monnaieARendre === 0){
  alert("Le compte est bon ! ");
}

// Calcul de la monnaie rendu
let nbBillet50 = 0;     let nbPiece2 = 0;
let nbBillet20 = 0;     let nbPiece1 = 0;
let nbBillet10 = 0;
let nbBillet5 = 0;
if(monnaieARendre > 0){
  do{
    
    if(monnaieARendre >= 50){
      nbBillet50++;
      monnaieARendre -= 50;
    }
    
    else if(monnaieARendre < 50 && monnaieARendre >= 20){
      nbBillet20++;
      monnaieARendre -= 20;
    }
    
    else if(monnaieARendre < 20 && monnaieARendre >= 10){
      nbBillet10++;
      monnaieARendre -= 10;
    }
    
    else if(monnaieARendre < 10 && monnaieARendre >= 5){
      nbBillet5++;
      monnaieARendre -= 5;
    }
    
    else if(monnaieARendre < 5 && monnaieARendre >= 2){
      nbPiece2++;
      monnaieARendre -= 2;
    }

    else if(monnaieARendre < 2 && monnaieARendre >= 1){
      nbPiece1++;
      monnaieARendre -= 1;
    }
    
  } while(monnaieARendre !== 0);
}


if(nbBillet50 >= 0){
  alert("Je dois vous rendre " + nbBillet50 + " billets de 50€");
}

if(nbBillet20 >= 0){
  alert("Je dois vous rendre " + nbBillet20 + " billets de 20€");
}

if(nbBillet10 >= 0){
  alert("Je dois vous rendre " + nbBillet10 + " billets de 10€");
}

if(nbBillet5 >= 0){
  alert("Je dois vous rendre " + nbBillet5 + " billets de 5€");
}

if(nbPiece2 >= 0){
  alert("Je dois vous rendre " + nbPiece2 + " pieces de 2€");
}

if(nbPiece1 >= 0){
  alert("Je dois vous rendre " + nbPiece1 + " pieces de 1€");
}
