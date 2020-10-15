"use strict";

document.body.addEventListener('touchstart', function() {
    var audios = [document.querySelector("#backgroundmusic")]
    for(let audio of audios) {
    audio.play()
    audio.pause()
    audio.currentTime = 0
    }
    audiosWeWantToUnlock = null

    }, false)
window.onorientationchange = rotate;

document.addEventListener("click", event =>{
    document.querySelector("#click").play();
})

let game = {
    points: 0,
    maxPoints: 10,
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
    document.querySelector("#medal_container").classList.add("hide");
    document.querySelector("#medal_win").classList.add("hide");
    document.querySelector("div#snif").classList.add("hide");

    document.querySelector("#play_button").addEventListener("click", initialState);  

    //await initialState(); 
}

function rotate() {
    if(window.innerWidth>window.innerHeight) {
        document.querySelector("#rotation").classList.remove("hide");
    } else {
        document.querySelector("#rotation").classList.add("hide");
    }
}


async function winCondition(house){
    if(game.points === game.maxPoints){
        game.medal++; 
        game.complete.push(house); 
        await initialState();
        document.querySelectorAll(".gray")[0].className = "full";
        document.querySelector("#medal_win").classList.remove("hide");
        document.querySelector("#medal_win").classList.add("pulse");
        document.querySelector("#medal_win").addEventListener("animationend", () => {
            document.querySelector("#medal_win").classList.add("shrink");
            if(game.medal == 4) {
                setTimeout(() => {
                    displayEndScreen();
                }, 4000);   
            }    
        });
        window.setTimeout(hideBigMedal, 3000);
    } 
}

function hideBigMedal() {
        document.querySelector("#medal_win").classList.add("hide");
        document.querySelector("#medal_win").classList.remove("pulse");
        document.querySelector("#medal_win").classList.remove("shrink");
}

async function initialState(){
    document.querySelector("#game").innerHTML =  await getSVG("main");
    document.querySelector("#medal_container").classList.remove("hide");

    document.querySelector("#main_water").addEventListener("click", waterInit); //#water er husnavn svg
    document.querySelector("#main_power").addEventListener("click", powerInit);
    document.querySelector("#main_light").addEventListener("click", lightInit);
    document.querySelector("#main_heat").addEventListener("click", heatInit);

    document.querySelector("#main_water_on").addEventListener("click", waterInit); //#water er husnavn svg
    document.querySelector("#main_power_on").addEventListener("click", powerInit);
    document.querySelector("#main_light_on").addEventListener("click", lightInit);
    document.querySelector("#main_heat_on").addEventListener("click", heatInit);

document.querySelector("#snif").classList.remove("hide");

    document.querySelector("#main_water_on").classList.add("levitate"); //#water er husnavn svg
    document.querySelector("#main_power_on").classList.add("levitate");
    document.querySelector("#main_light_on").classList.add("levitate");
    document.querySelector("#main_heat_on").classList.add("levitate");

    document.querySelector("#backgroundmusic").volume = 0.1;
    document.querySelector("#backgroundmusic").loop = true;
    document.querySelector("#backgroundmusic").play();
    
    //document.querySelector("#back").addEventListener("click", initialState);
    game.complete.forEach(houseComplete);
}


function houseComplete(house){
    document.querySelector(`#main_${house}_on`).classList.add("hide");   
    
    document.querySelector(`#main_${house}`).removeEventListener("click", window[`${house}Init`]);  
    document.querySelector(`#main_${house}_on`).removeEventListener("click", window[`${house}Init`]);
}


async function displayEndScreen() {
    await initialState();
    
    document.querySelector("#game").innerHTML =  await getSVG("end_screen");
    document.querySelector("#snif").classList.add("hide");
    }
    



