"use strict";

window.radiatorLeft = {
    onElement:"#heat_radi_left_on",
    offElement:"#heat_radi_left_off",
    heatOn: true
}

window.radiatorRight = {
    onElement:"#heat_radi_right_on",
    offElement:"#heat_radi_right_off",
    heatOn: false
}

const heatInputs = {
    radiatorLeftClicked: false,
    radiatorRightClicked: false
}

async function heatInit(){
    document.querySelector("#medal_container").classList.add("hide");

    game.points = 0;
    document.querySelector("#game").innerHTML = await getSVG("heat"); //får det returnede SVG
    heatEvents();
    heatLoop();
}

function heatEvents() {
    document.querySelector(radiatorLeft.onElement).addEventListener("click", ()=> heatInputs.radiatorLeftClicked = true);
    document.querySelector(radiatorRight.offElement).addEventListener("click", ()=> heatInputs.radiatorRightClicked = true);
}

function heatLoop(){
    Object.keys(heatInputs).forEach(key =>{

        if(heatInputs[key]){
            window[key.split("Clicked")[0]].heatOn = !window[key.split("Clicked")[0]].heatOn;
            heatInputs[key] = false;
            game.points++
            heatRenderModel(window[key.split("Clicked")[0]]);
            winCondition("heat");
        }    
    })
    requestAnimationFrame(heatLoop);
}

function heatRenderModel(model){
    if(model.heatOn){
        document.querySelector(model.offElement).classList.add("hide");
        document.querySelector(model.onElement).classList.remove("hide");
    } else{
        document.querySelector(model.onElement).classList.add("hide");
        document.querySelector(model.offElement).classList.remove("hide");
    }
    heatHunter(model);
}

function heatHunter(model) {
    let hunter = document.querySelector("#hunter");
    let elementTarget;
    hunter.classList.remove("hide");
    hunter.classList.add("run");
    if(model.heatOn){
        elementTarget = document.querySelector(model.offElement)
    } else {
        elementTarget = document.querySelector(model.onElement)
    }
    setTimeout(() => {
        hunter.classList.add("hide");
        hunter.classList.remove("run");
        elementTarget.classList.remove("hide");
    }, 1000);
}