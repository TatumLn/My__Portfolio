console.log("MODE JS Activé")

//Message de salutation
let date = new Date;
let heure = date.getHours();
let salutation = document.getElementById("Salutation")
let reponse = (heure < 18)? salutation.innerText = "</>Hello</>":salutation.innerText = "</>Good Night</>"

//Presentation
let whoIAm = document.getElementById("Me")
whoIAm.innerHTML = "My name is <span class='S'>PROSPER</span> <br> I'm a <span class='S'>student</span> developer"

//Domaine
let iDo = document.getElementById("Rôle")
iDo.innerText = "</>Front & Back_End Mobile & Software </>"
