// Déclaration de tableaux
const array1 = [10, "Hello", { name: "Doe" }, [1, 2, 3]];
console.log(array1);

// Déclaration de tableaux
const array2 = Array(1, 2, 3);
const array3 = new Array(1, 2, 3);
const array4 = Array.from("James");
console.log(array4);

// Vérification
console.log(Array.isArray(array1));

// Accéder aux valeurs grâce à l'indice
console.log(array1[1]);
console.log(array1[3][1]);

// Réinitialiser  un tableaux
// array1.length = 0; // Erreur car variable const
console.log(array1);

array1[array1.length] = false;
console.log(array1);
