
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

const lighInputs = {
    lampLightClicked: false,
    floorLampLightClicked: false,
    tentLightClicked: false
}

async function lightInit(){
    document.querySelector("#medal_container").classList.add("hide");
    game.points = 0;
    document.querySelector("#game").innerHTML = await getSVG("light"); //får det returnede SVG
    lightEvents();
    lightLoop();
}

function lightEvents() {
    document.querySelector(lamp.lightElement).addEventListener("click", ()=> lighInputs.lampLightClicked = true);
    document.querySelector(floorLamp.lightElement).addEventListener("click", ()=> lighInputs.floorLampLightClicked = true);
    document.querySelector(tent.lightElement).addEventListener("click", ()=> lighInputs.tentLightClicked = true);
}

function lightLoop(){
    Object.keys(lighInputs).forEach(key =>{

        if(lighInputs[key]){
            window[key.split("Light")[0]].lightOn = !lighInputs[key];
            lighInputs[key] = false;
            game.points++
            lightRenderModel(window[key.split("Light")[0]]);
            winCondition("light");
        }    
    })
requestAnimationFrame(lightLoop);
}

function lightRenderModel(model){
    if(model.lightOn){
        document.querySelector(model.lightElement).classList.remove("hide");
    } else{
        document.querySelector(model.lightElement).classList.add("hide");
        lightHunter(model);
    }

}

function lightHunter(model) {
    let elementTarget = document.querySelector(model.lightElement);
    setTimeout(() => {
        elementTarget.classList.remove("hide");
    }, 2000);
}
