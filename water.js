
"use strict";

// const water = {
//     items: ["fossett", "dishwasher", "waterhose", "snif", "hunter"]
// }

async function waterInit(){
    document.querySelector("#game").innerHTML = await getSVG("water");
}