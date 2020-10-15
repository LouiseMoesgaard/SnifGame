
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
    addLightAnimations();
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

function addLightAnimations() {
    document.querySelector("#lampLight").classList.add("glow");
    document.querySelector("#floorLampLight").classList.add("glow");
    document.querySelector("#tentLight").classList.add("glow");
}

function lightRenderModel(model){
    if(model.lightOn){
        document.querySelector(model.lightElement).classList.remove("hide");
    } else{
        document.querySelector(model.lightElement).classList.add("hide");
        document.querySelector(model.lightElement).classList.remove("glow");
        lightHunter(model);
    }

}

function lightHunter(model) {
    let elementTarget = document.querySelector(model.lightElement);
    setTimeout(() => {
        elementTarget.classList.remove("hide");
        addLightAnimations();
    }, 1000);
}
