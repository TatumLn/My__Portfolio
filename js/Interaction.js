//Test
console.log("Salama Tompoko Oh")
//Selecteur
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
iDo.innerText = "</>Front & MEAN Stack / Mobile & Software </>"

//Telechargement de mon CV
let boutonDown = selecteurID("btn")
boutonDown.addEventListener('click', ()=>{
    alert("Bouton de telechargement de CV a ete cliquez!")
})

//----------------------About--------------------------------------------------------------------------------
//----------------------Background---------------------------------------------------------------------------
const prevBtn = selecteurID("btn__prev");
const suivBtn = selecteurID("btn__suiv");
const background = selecteurClass(".background");
//tableau d'image
const images = ['../assets/', '../assets/', '../assets/']
let indexImageActuel = 0;
//Pour le bouton prev
prevBtn.addEventListener('click', ()=>{
    indexImageActuel--;
    if(indexImageActuel < 0){
        indexImageActuel = images.length - 1;
    }
    background.style.backgroundImage = `url('${images[indexImageActuel]}')`;
})
//Pour le bouton suiv
suivBtn.addEventListener('click', ()=>{
    indexImageActuel++;
    if(indexImageActuel >= images.length){
        indexImageActuel = 0;
    }
    background.style.backgroundImage = `url('${images[indexImageActuel]}')`;
})
