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

window.waterhose = {
    element: "#waterhoseWater",
    waterElement: "#waterhoseWater",
    waterOn: true
}

const waterInputs = {
    fossettWaterClicked: false,
    dishwasherWaterClicked: false,
    waterhoseWaterClicked: false
}

async function waterInit(){
    document.querySelector("#medal_container").classList.add("hide");
    game.points = 0;
    document.querySelector("#game").innerHTML = await getSVG("water");
    document.querySelector("#hej").play();
    /*document.querySelector("#back").classList.remove("hide");
    document.querySelector("#back").addEventListener("click", back);*/
    waterEvents();
    waterLoop();
    addWaterAnimations();
}

function waterEvents() {
    document.querySelector(fossett.element).addEventListener("click", ()=> waterInputs.fossettWaterClicked = true);
    document.querySelector(dishwasher.element).addEventListener("click", ()=> waterInputs.dishwasherWaterClicked = true);
    document.querySelector(waterhose.element).addEventListener("click", ()=> waterInputs.waterhoseWaterClicked = true);
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

function addWaterAnimations() {
    document.querySelector("#dishwasher").classList.add("vibrate");
    document.querySelector("#waterhoseWater").classList.add("swing");
}

function waterRenderModel(model){
    if(model.waterOn){
        document.querySelector(model.waterElement).classList.remove("hide");
    } else{
        document.querySelector(model.waterElement).classList.add("hide");
        if(model == dishwasher) {
            document.querySelector("#dishwasher").classList.remove("vibrate");
        } else if(model == waterhose) {
            document.querySelector("#waterhoseWater").classList.remove("swing");
        }
        waterHunter(model);
    }
}

function waterHunter(model) {
    let elementTarget = document.querySelector(model.waterElement);

    setTimeout(() => {
        elementTarget.classList.remove("hide");
        document.querySelector("#hehe").play();
        if(model == dishwasher) {
            addWaterAnimations();
            document.querySelector("#hehe").play();
        } else if (model == waterhose) {
            addWaterAnimations();
            document.querySelector("#hehe").play();
        }
    }, 2000);
}