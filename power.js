
"use strict";

// const power = [
//     items: ["tv", "vacuum", "router", "snif", "hunter"]
// ]

async function powerInit(){
    document.querySelector("#game").innerHTML = await getSVG("power");
addAnimations();
}

function addAnimations() {
    document.querySelector("#power_vacuum_off").classList.add("shake");
}