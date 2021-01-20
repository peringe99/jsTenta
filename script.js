let sumSlider = document.getElementById("sumSlider");
let sumOutput = document.getElementById("summa");
let yearSlider = document.getElementById("yearSlider");
let yearOutput = document.getElementById("year");
let totalCost = document.getElementById("totalCost");
let monthlyCost = document.getElementById("monthlyCost")
let sumFormOutput = document.getElementById("sum");
let yearFormOutput = document.getElementById("yearForm");

let interest = 

sumFormOutput.value = sumSlider.value;
sumSlider.value = sumFormOutput.value;

sumSlider.oninput = function(){
    sumFormOutput.value = sumSlider.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    monthlyCost.innerHTML = (sumSlider.value * 1.054) / (yearSlider.value * 12);
}

yearFormOutput.value = yearSlider.value;
yearSlider.value = yearFormOutput.value;

yearSlider.oninput = function(){
    yearFormOutput.value = yearSlider.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    monthlyCost.innerHTML = (sumSlider.value * 1.054) / (yearSlider.value * 12);
}

sumFormOutput.oninput = function(){
    sumSlider.value = sumFormOutput.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    monthlyCost.innerHTML = (sumSlider.value * 1.054) / (yearSlider.value * 12);
}

yearFormOutput.oninput = function(){
    yearSlider.value = yearFormOutput.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    monthlyCost.innerHTML = (sumSlider.value * 1.054) / (yearSlider.value * 12);
}