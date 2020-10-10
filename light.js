
"use strict";

// const light = {
//     items:["tableLamp", "floorLamp", "tent", "snif", "hunter"]
// }

// // laves for alle items
// const tableLamp = {
//     x:
//     y: 
//     width:
//     height:
//     element:
//     direction:
// }
//her skal være globale objecter, der alle repræsentere en del af en scene, 
//som skal animeres eller gøre noget

async function lightInit(){
    document.querySelector("#game").innerHTML = await getSVG("light"); //får det returnede SVG

}

// function lightGameplayController() {
// //
// }


// function lightEvents() {

// }

// function lightLoop(){
    
//     // kalder lightprocessinput og lightWinConditions 
//     //brug en timer til at at tjekke input og om man har vundet 

// }

// function lightProcessInput(){

//     //sætter animation igang alt efter hvad man trykket på. 
    
// }

// function lightWinCondition(){

//     //if else der tjekker om man har vundet. ellers forsætter loop. 
    
// }