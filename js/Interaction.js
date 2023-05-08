//Test
console.log("Salama Tompoko Oh")

function selecteurID (idName) {
    return document.getElementById(idName)
}

function creationElement (elementName) {
    return document.createElement(elementName)
}

function selecteurClass (className) {
    return document.querySelector(className)   
}



//------------------------Home-------------------------------------------------------------------------------
//Message de salutation
let date = new Date;
let heure = date.getHours();
let salutation = selecteurID("Salutation")
let reponse = (heure < 18)? salutation.innerText = "</>Hello</>":salutation.innerText = "</>Good Night</>"

//Presentation
let whoIAm = selecteurID("Me")
whoIAm.innerHTML = "My name is <span class='S'>PROSPER</span> I'm a <span class='S'>student developer</span>"

//Domaine
let iDo = selecteurID("Rôle")
iDo.innerText = "</>Front & Back_End / Mobile & Software </>"

//Telechargement de mon CV
let boutonDown = selecteurID("btn")
boutonDown.addEventListener('click', ()=>{
    alert("Bouton de telechargement de CV a ete cliquez!")
})

//----------------------About--------------------------------------------------------------------------------

