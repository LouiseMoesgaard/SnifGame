"use strict";

let points; 

let maxPoints = 3;

let medal = 0;

document.addEventListener("DOMContentLoaded", mainInit);

async function getSVG(filename) {
    let response = await fetch(`svgs/${filename}.svg`);
    let mySvgData = await response.text();
    return mySvgData; 
}

async function mainInit(){
    await initialState(); 
}

async function winCondition(){
    if(points === maxPoints){
        medal++;  
        await initialState();
        document.querySelectorAll(".gray")[0].className = "full";
    } 
}

async function initialState(){
    document.querySelector("#game").innerHTML =  await getSVG("main");
    document.querySelector("#main_water").addEventListener("click", waterInit); //#water er husnavn svg
    document.querySelector("#main_power").addEventListener("click", powerInit);
    document.querySelector("#main_light").addEventListener("click", lightInit);
    document.querySelector("#main_heat").addEventListener("click", heatInit);

    document.querySelector("#main_water_on").addEventListener("click", waterInit); //#water er husnavn svg
    document.querySelector("#main_power_on").addEventListener("click", powerInit);
    document.querySelector("#main_light_on").addEventListener("click", lightInit);
    document.querySelector("#main_heat_on").addEventListener("click", heatInit);

    //document.querySelector("#back").addEventListener("click", initialState);
}



