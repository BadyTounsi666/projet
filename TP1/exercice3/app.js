var annee;
var mois;
var jour;
annee = parseInt(prompt("Donner l'annee"));
mois = parseInt(prompt("Donner le mois"));
switch (mois) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    jour = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    jour = 30;
    break;
  case 2:
    if (annee % 4 == 0 && annee % 100 != 0){
      jour = 29;
    } else {
      jour = 28;
    }
    break;
  default:
    alert("Mois invalide !");
    break;
}
  alert(jour);
  document.