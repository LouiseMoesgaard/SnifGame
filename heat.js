
"use strict";

// const warmth = {
//     items: ["window1", "Window2", "radiater1", "radiater2", "snif", "hunter"]
// }

async function heatInit(){
    document.querySelector("#game").innerHTML = await getSVG("heat");
}