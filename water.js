
"use strict";

let points = 5;

// const water = {
//     items: ["fossett", "dishwasher", "waterhose", "snif", "hunter"]
// }

window.fossett = {
    element: "#fossett",
    waterElement: "#fossettWater",
    waterOn: true
}

window.dishwasher = {
    element: "#dishwasher",
    waterElement: "#dishwasherWater",
    waterOn: true
}

const inputs = {
    fossettWaterClicked: false,
    dishwasherWaterClicked: false
}

async function waterInit(){
    document.querySelector("#game").innerHTML = await getSVG("water");
    waterEvents();
    waterLoop();
}

function waterEvents() {
    document.querySelector(fossett.element).addEventListener("click", ()=> inputs.fossettWaterClicked = true);
    document.querySelector(dishwasher.element).addEventListener("click", ()=> inputs.dishwasherWaterClicked = true);
}

function waterLoop(){
    Object.keys(inputs).forEach(key =>{

        if(inputs[key]){
            window[key.split("Water")[0]].waterOn = !inputs[key];
            renderModel(window[key.split("Water")[0]]);
        }    
    })
requestAnimationFrame(waterLoop);
}

function renderModel(model){
    if(model.waterOn){
        document.querySelector(model.waterElement).classList.remove("hide");
    } else{
        document.querySelector(model.waterElement).classList.add("hide");
    }

}

// function lightWinCondition(){

//     //if else der tjekker om man har vundet. ellers forsætter loop. 
    
// }