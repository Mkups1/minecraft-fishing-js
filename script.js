// Minecraft Fishing Simulator

// Variables to Store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

// Global Variables
let character= "Steve"

// Event Listeners
steveImgEl.addEventListener("click", selectSteve)
alexImgEl.addEventListener("click", selectAlex)
fishBtnEl.addEventListener("click", fishOnce)
// Event functions
function selectSteve() {
    // Update Active border
    steveImgEl.classList.add("active")
    alexImgEl.classList.remove("active")

    // update character selection variables
    character = "Steve"
}

function selectAlex() {
    // Update Active border
    steveImgEl.classList.remove("active")
    alexImgEl.classList.add("active")
    // update character selection variables
    character = "Alex"
}

function fishOnce(){
// Test current character
if(character === "Steve"){
    // use Steve Probability Distribution for Fishing
    alert ("Fish with Steve")
} else {
    // use Alex Probability Distribution for Fishing
    alert ("Fish with alex")
}
}