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
let plus5Btn= document.getElementById("plus5");
let until200Btn = document.getElementById("until200")

// Global Variables
let character= "Steve"
let numCod = 0
let numSalmon = 0
let numTropical = 0
let numPuffer = 0

// Event Listeners
steveImgEl.addEventListener("click", selectSteve)
alexImgEl.addEventListener("click", selectAlex)
fishBtnEl.addEventListener("click", fishOnce)
plus5Btn.addEventListener("click", plus5),
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
   let randNum = Math.random();
    
    if (randNum < 0.7) {
        numCod++
        imgResultEl.src = "img/Raw-cod.png"
        numCodEl.innerHTML = numCod
    } else if (randNum < 0.9) {
        numsalmon++
        imgResultEl.src = "img/Raw-Salmon.png"
        numSalmonEl.innerHTML = numSalmon
    } else if (randNum < 0.95) {
        numTrobpica++
        imgResultEl.src = "img/Tropical-Fish.png"
        numTropicalEl.innerHTML = numTropical
    } else {
        numPuffer++
        imgResultEl.src = "img/Pufferfish.png"
        numPufferEl.innerHTML = numPuffer
    }
} else {
    // use Alex Probability Distribution for Fishing
    alert ("Fish with alex")
}
}