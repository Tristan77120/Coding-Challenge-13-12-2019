//Division par 2

function Divisionpardeux(){
	var x = document.getElementById("x").value;
	var y = 2;
	var varresultatdivisionpardeux = x / y;
	document.getElementById('resultatdivisionpardeux').innerHTML = varresultatdivisionpardeux;
}

// Incrémentation
var resultat_4 = 0;
function plusTen(){
  resultat_4 = resultat_4 * 1 - 10 * 1;
  document.getElementById('resultat_4').innerHTML = resultat_4;
}
function diviseFive(){
  resultat_4 = resultat_4 * 5;
  document.getElementById('resultat_4').innerHTML = resultat_4;
}

function combinePlusTenMinusTwo(){
  resultat_4 = resultat_4 * 1 / 2 * (1 * 4);
  document.getElementById('resultat_4').innerHTML = resultat_4;
}

function resetExo4(){
  resultat_4 = resultat_4 * 0;
  document.getElementById('resultat_4').innerHTML = resultat_4;
}

function zero(){
  document.getElementById('resultat_4').innerHTML = resultat_4;
}
window.onload = zero;
