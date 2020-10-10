"use strict";

mainGameplayController();

// const models = {
//     items:["water", "power", "warmth", "light", "snif"]
// }

document.addEventListener("DOMContentLoaded", mainInit);

async function getSVG(filename) {
    let response = await fetch(`svgs/${filename}.svg`);
    let mySvgData = await response.text();
    return mySvgData; 
}

async function mainInit(){
    document.querySelector("#game").innerHTML =  await getSVG("main");

    document.querySelector("#main_water").addEventListener("click", waterInit); //#water er husnavn svg
    document.querySelector("#main_power").addEventListener("click", powerInit);
    document.querySelector("#main_light").addEventListener("click", lightInit);
    document.querySelector("#main_heat").addEventListener("click", heatInit);

    document.querySelector("#main_water_on").addEventListener("click", waterInit); //#water er husnavn svg
    document.querySelector("#main_power_on").addEventListener("click", powerInit);
    document.querySelector("#main_light_on").addEventListener("click", lightInit);
    document.querySelector("#main_heat_on").addEventListener("click", heatInit);
}

function mainGameplayController() {
    screenOrientation();
    }

function screenOrientation() {
    window.screen.orientation.lock("portrait");
}


