// EXO1 V1
// const mot = prompt("Mot ?");
// alert(`Ce mot fait ${mot.length} lettres !`);
// let lettres;
// for (let i = 0 ; i < mot.length - 1 ; i++){
//     lettres += mot[i] + ",";
// }
// alert(`Le mot contient les lettres ${lettres} et ${mot[mot.length - 1]}`);

// EXO1 V2
// Amélioration possible
// Utilisation d'un regex pour vérifier que le mot ne contient que des
// lettres sinon feedback et on repose la question 
let isValid = false;
let mot;
while(!isValid){
    mot = prompt("Entrer un mot contenant uniquement des lettres : ");

    if(/^[A-Za-zÀ-ÿ]+$/.test(mot)){
        isValid = true;
    } else {
        alert("Le mot doit contenir que des lettres");
    }
}
mot = mot
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "");
    alert(`Ce mot fait ${mot.length} lettres`);

let newLetter = [];
for(let i = 0 ; i < mot.length; i++){
    if(!newLetter.includes(mot[i])){ // Check s'il y a des doublons
        newLetter.push(mot[i])
    }
}
alert(`Il contient les differentes lettres ${newLetter.join(", ")}`);