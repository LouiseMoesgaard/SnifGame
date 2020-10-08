"use strict";

const models = {
    items:["water", "power", "warmth", "light", "snif"]
}

document.addEventListener("DOMContentLoaded", mainInit);

async function getSVG(filename) {
    let response = await fetch(`${filename}.svg`);
    let mySvgData = await response.text();
    return mySvgData; 
}

function mainInit(){
    document.querySelector("#game").innerHTML = getSVG("main");

    document.querySelector("#water").addEventListener("click", waterInit); //#water er husnavn svg
    document.querySelector("#power").addEventListener("click", powerInit);
    document.querySelector("#light").addEventListener("click", lightInit);
    document.querySelector("#warmth").addEventListener("click", warmthInit);
}

function 

