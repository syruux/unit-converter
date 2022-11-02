const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-conv")
const volumeEl = document.getElementById("volume-conv")
const massEl = document.getElementById("mass-conv")
const errorEl = document.getElementById("error-el")
let inputValue = 0
errorEl.classList.add("hidden")

convertBtn.addEventListener ("click", function() {
    inputValue = inputEl.value 
    if (isNaN(inputValue)) {
        errorEl.classList.remove("hidden")
        errorEl.textContent = "Your input value isn't a number!"
    } else {
        errorEl.classList.add("hidden")
        lengthEl.textContent = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`
        volumeEl.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallon | ${inputValue} gallon = ${(inputValue / 0.264).toFixed(3)} liters`
        massEl.textContent = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pound | ${inputValue} pound = ${(inputValue / 2.204).toFixed(3)} kilos`
    }
})
