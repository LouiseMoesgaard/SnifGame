
"use strict";
//her skal være globale objecter, der alle repræsentere en del af en scene, 
//som skal animeres eller gøre noget

document.addEventListener("DOMContentLoaded", getSVG);

async function getSVG() {
    let response = await fetch("??.svg");
    let mySvgData = await response.text();

    document.querySelector("#light").innerHTML = mySvgData;
    
    lightGameplayController();
}

function lightGameplayController() {
//
}


function lightEvents() {

}

function lightLoop(){
    // kalder lightprocessinput og lightWinConditions 
    //brug en timer til at at tjekke input og om man har vundet 

}

function lightProcessInput(){

    //sætter animation igang alt efter hvad man trykket på. 
    
}

function lightWinCondition(){

    //if else der tjekker om man har vundet. ellers forsætter loop. 
    
}