const inputEl = document.getElementById("input");

const btnEl = document.getElementById("btn");

const profitEl = document.getElementById("profit");


btnEl.addEventListener("click",()=>{
    profitEl.innerText = inputEl.value * 0.0033 + "$";
})