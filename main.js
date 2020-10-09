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

    // document.querySelector("#water").addEventListener("click", waterInit); //#water er husnavn svg
    // document.querySelector("#power").addEventListener("click", powerInit);
    // document.querySelector("#light").addEventListener("click", lightInit);
    // document.querySelector("#heat").addEventListener("click", warmthInit);
}

function mainGameplayController() {
    screenOrientation();
    }

function screenOrientation() {
    screen.orientation.lock("portrait");
}
