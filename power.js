"use strict";

window.vacuum = {
    element:"#power_vacuum_off",
    powerElement: "#power_vacuum_on",
    powerOn: true
}

window.modem = {
    element:"#power_modem_off",
    powerElement: "#power_modem_on",
    powerOn: true
}

window.tv = {
    element: "#power_off",
    powerElement:"#power_on",
    powerOn: true
}

const powerInputs = {
    vacuumPowerClicked: false,
    modemPowerClicked: false,
    tvPowerClicked: false
}

async function powerInit(){
    game.points = 0;
    document.querySelector("#game").innerHTML = await getSVG("power"); //får det returnede SVG
    powerEvents();
    powerLoop();
    addAnimations();
}

function powerEvents() {
    document.querySelector(vacuum.powerElement).addEventListener("click", ()=> powerInputs.vacuumPowerClicked = true);
    document.querySelector(modem.powerElement).addEventListener("click", ()=> powerInputs.modemPowerLightClicked = true);
    document.querySelector(tv.powerElement).addEventListener("click", ()=> powerInputs.tvPowerClicked = true);
}

function powerLoop(){
    Object.keys(powerInputs).forEach(key =>{

        if(powerInputs[key]){
            window[key.split("Power")[0]].powerOn = !powerInputs[key];
            powerInputs[key] = false;
            game.points++
            powerRenderModel(window[key.split("Power")[0]]);
            winCondition("power");
        }    
    })
requestAnimationFrame(powerLoop);
}

function powerRenderModel(model){
    console.log(model)
    if(model.powerOn){
        document.querySelector(model.powerElement).classList.remove("hide");
    } else{
        document.querySelector(model.powerElement).classList.add("hide");
    }
}


function addAnimations() {
    console.log("lets shake it up!");
 document.querySelector("#power_vacuum_off").classList.add("vibration");
}