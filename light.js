
"use strict";

let points = 5;

// const light = {
//     items:["tableLamp", "floorLamp", "tent", "snif", "hunter"]
// }

//laves for alle items
window.lamp = {
    element:"#lamp",
    lightElement: "#lampLight",
    lightOn: true
}

window.floorLamp = {
    element:"#floorLamp",
    lightElement: "#floorLampLight",
    lightOn: true
}

window.tent = {
    element: "#tent",
    lightElement:"#tentLight",
    lightOn: true
}

const inputs = {
    lampLightClicked: false,
    floorLampLightClicked: false,
    tentLightClicked: false
}

async function lightInit(){
    document.querySelector("#game").innerHTML = await getSVG("light"); //får det returnede SVG
    lightEvents();
    lightLoop();


}


function lightEvents() {
    document.querySelector(lamp.lightElement).addEventListener("click", ()=> inputs.lampLightClicked = true);
    document.querySelector(floorLamp.lightElement).addEventListener("click", ()=> inputs.FloorLampLightClicked = true);
    document.querySelector(tent.lightElement).addEventListener("click", ()=> inputs.tentLightClicked = true);
}

function lightLoop(){
    Object.keys(inputs).forEach(key =>{

        if(inputs[key]){
            window[key.split("Light")[0]].lightOn = !inputs[key];
            renderModel(window[key.split("Light")[0]]);
        }    
    })
requestAnimationFrame(lightLoop);
}

function renderModel(model){
    if(model.lightOn){
        document.querySelector(model.lightElement).classList.remove("hide");
    } else{
        document.querySelector(model.lightElement).classList.add("hide");

    }

}


// function lightWinCondition(){

//     //if else der tjekker om man har vundet. ellers forsætter loop. 
    
// }