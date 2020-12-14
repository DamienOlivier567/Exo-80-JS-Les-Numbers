let nombreEntier = document.getElementById("is-integer");
let nombre = 54.56;

if (Number.isInteger(nombre)){
    nombreEntier.innerHTML = nombre + " est un nombre entier."
}
else{
    nombreEntier.innerHTML = nombre + " n'est pas un nombre entier."
}

let isNan = document.getElementById('is-nan');
let contenu = "UpTo, vive Javascript!";

if (Number.isNaN(contenu)){
    isNan.innerHTML = contenu + "est nombre";
}
else {
    isNan.innerHTML = contenu + " est NaN (Not a Number )";
}

let parseFloat = document.getElementById('parse-float');
let chiffre = "52.563";
let age = 20;
let resultat = age * (Number.parseFloat(chiffre));

parseFloat.innerHTML = resultat + "% de la population blablabla";

let parseInt = document.getElementById('parse-int');
let value = "65px";
let result = age / (Number.parseInt(value));

parseInt.innerHTML = result + "px";

let toFixed = document.getElementById('to-fixed');
let value1 = 41.9596

value1 = value1.toFixed(2);

toFixed.innerHTML = value1;


