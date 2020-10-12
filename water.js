"use strict";

window.fossett = {
    element: "#fossett",
    waterElement: "#fossettWater",
    waterOn: true
}

window.dishwasher = {
    element: "#dishwasher",
    waterElement: "#dishwasherWater",
    waterOn: true
}

const waterInputs = {
    fossettWaterClicked: false,
    dishwasherWaterClicked: false
}

async function waterInit(){
    game.points = 0;
    document.querySelector("#game").innerHTML = await getSVG("water");
    waterEvents();
    waterLoop();
}

function waterEvents() {
    document.querySelector(fossett.element).addEventListener("click", ()=> waterInputs.fossettWaterClicked = true);
    document.querySelector(dishwasher.element).addEventListener("click", ()=> waterInputs.dishwasherWaterClicked = true);
}

function waterLoop(){
    Object.keys(waterInputs).forEach(key =>{
        if(waterInputs[key]){
            window[key.split("Water")[0]].waterOn = !waterInputs[key];
            waterInputs[key] = false;
            game.points++
            waterRenderModel(window[key.split("Water")[0]]);
            winCondition("water");
        }    
    })
requestAnimationFrame(waterLoop);
}

function waterRenderModel(model){
    if(model.waterOn){
        document.querySelector(model.waterElement).classList.remove("hide");
    } else{
        document.querySelector(model.waterElement).classList.add("hide");
        hunterLoop(model);
    }
}

function hunterLoop(model) {
    console.log("Hunter");
let elementTarget = document.querySelector(model.waterElement);
setTimeout(() => {
    elementTarget.classList.remove("hide");
}, 2000);
}