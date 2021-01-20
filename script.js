let sumSlider = document.getElementById("sumSlider");
let yearSlider = document.getElementById("yearSlider");
let totalCost = document.getElementById("totalCost");
let monthlyCost = document.getElementById("monthlyCost")
let sumFormOutput = document.getElementById("sum");
let yearFormOutput = document.getElementById("yearForm");

sumFormOutput.value = sumSlider.value;
sumSlider.value = sumFormOutput.value;

// Har en "oninput" på varje slider och form så att värdena alltid ändras oavsett vilket sätt du 
// använder för att bestömma summa eller år 
sumSlider.oninput = function(){
    sumFormOutput.value = sumSlider.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}

yearFormOutput.value = yearSlider.value;
yearSlider.value = yearFormOutput.value;

yearSlider.oninput = function(){
    yearFormOutput.value = yearSlider.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}

sumFormOutput.oninput = function(){
    sumSlider.value = sumFormOutput.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}

yearFormOutput.oninput = function(){
    yearSlider.value = yearFormOutput.value;
    totalCost.innerHTML = (sumSlider.value * 1.054);
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}