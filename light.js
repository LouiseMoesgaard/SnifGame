
"use strict";

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
    points = 0;
    document.querySelector("#game").innerHTML = await getSVG("light"); //får det returnede SVG
    lightEvents();
    lightLoop();
}

function lightEvents() {
    document.querySelector(lamp.lightElement).addEventListener("click", ()=> inputs.lampLightClicked = true);
    document.querySelector(floorLamp.lightElement).addEventListener("click", ()=> inputs.floorLampLightClicked = true);
    document.querySelector(tent.lightElement).addEventListener("click", ()=> inputs.tentLightClicked = true);
}

function lightLoop(){
    Object.keys(inputs).forEach(key =>{

        if(inputs[key]){
            window[key.split("Light")[0]].lightOn = !inputs[key];
            inputs[key] = false;
            points++
            renderModel(window[key.split("Light")[0]]);
            winCondition();
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
