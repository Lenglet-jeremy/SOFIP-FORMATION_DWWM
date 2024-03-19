const a = 7;
const b = 3.14574;
const c = 9.9999999;

let d;
let e = null;
let f = "John Doe";

function type(variable = null){
    if(!Number(variable)){
        console.log("Cette variable n'est pas un nombre.");
    }
    else if(Number.isInteger(variable)){
        console.log("Cette variable est un entier");
    }
    else if(!Number.isInteger(variable) && Number(variable)){
        let resultat = Math.round(variable * 100) /100;
        console.log("Resultat arondi à deux chiffre aprés la virgule : " + resultat)
    }

}

type(a);
type(b);
type(c);
type(d);
type(e);
type(f);
