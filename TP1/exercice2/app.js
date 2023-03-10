var age = prompt(("Donner votre age"));
while(age<=0){
    age = prompt(("Donner votre age"));
    alert("Error");
}
if(age<=13){
    alert("vous etes encore trop jeune");
}else if(age>13 && age<18){
    alert("Vous etes encore trop mineur(e)");
}else if(18>age && age<25){
    alert("Vous etes deja majeur(e)");
}
else{
    alert("Vous ne veillissez donc pas!");
}