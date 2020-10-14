"use strict";


let game = {
    points: 0,
    maxPoints: 2,
    medal:0,
    complete:[]
}

document.addEventListener("DOMContentLoaded", mainInit);

async function getSVG(filename) {
    let response = await fetch(`svgs/${filename}.svg`);
    let mySvgData = await response.text();
    return mySvgData; 
}

async function mainInit(){
    document.querySelector("#game").innerHTML =  await getSVG("start_screen");

    document.querySelector("#play_button").classList.add("wiggle");

    document.querySelectorAll("#icons g").forEach(icon => icon.classList.add("levitate"));


    document.querySelector("#play_button").addEventListener("click", initialState); 

    //await initialState(); 
}

async function winCondition(house){
    if(game.points === game.maxPoints){
        game.medal++; 
        game.complete.push(house); 
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



    document.querySelector("#main_water_on").classList.add("levitate"); //#water er husnavn svg
    document.querySelector("#main_power_on").classList.add("levitate");
    document.querySelector("#main_light_on").classList.add("levitate");
    document.querySelector("#main_heat_on").classList.add("levitate");
    
    //document.querySelector("#back").addEventListener("click", initialState);
    game.complete.forEach(houseComplete);
}


function houseComplete(house){
    document.querySelector(`#main_${house}_on`).classList.add("hide");   
    
    document.querySelector(`#main_${house}`).removeEventListener("click", window[`${house}Init`]);  
    document.querySelector(`#main_${house}_on`).removeEventListener("click", window[`${house}Init`]);
}


