let sumSlider = document.getElementById("sumSlider");
let yearSlider = document.getElementById("yearSlider");
let totalCost = document.getElementById("totalCost");
let monthlyCost = document.getElementById("monthlyCost")
let sumFormOutput = document.getElementById("sum");
let yearFormOutput = document.getElementById("yearForm");

// Visar default värdet
sumFormOutput.value = sumSlider.value;

// Har en "oninput" på varje slider och form så att värdena alltid ändras oavsett vilket sätt du 
// använder för att bestömma summa eller år 
sumSlider.oninput = function(){
    sumFormOutput.value = sumSlider.value;
    // Räknar ut beloppet multiplicerat med räntan 
    totalCost.innerHTML = (sumSlider.value * 1.054);
    // Räknar ut totalbeloppet delat på antal månader i valt år
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}

//Visar default värdet
yearFormOutput.value = yearSlider.value;

yearSlider.oninput = function(){
    yearFormOutput.value = yearSlider.value;
    // Räknar ut beloppet multiplicerat med räntan 
    totalCost.innerHTML = (sumSlider.value * 1.054);
    // Räknar ut totalbeloppet delat på antal månader i valt år
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}

sumFormOutput.oninput = function(){
    sumSlider.value = sumFormOutput.value;
    // Räknar ut beloppet multiplicerat med räntan 
    totalCost.innerHTML = (sumSlider.value * 1.054);
    // Räknar ut totalbeloppet delat på antal månader i valt år
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}

yearFormOutput.oninput = function(){
    yearSlider.value = yearFormOutput.value;
    // Räknar ut beloppet multiplicerat med räntan 
    totalCost.innerHTML = (sumSlider.value * 1.054);
    // Räknar ut totalbeloppet delat på antal månader i valt år
    let monthlyCostSum = (sumSlider.value * 1.054) / (yearSlider.value * 12);
    // Multiplicerar value på summan med 1 så att det blir en Int men inte ändrar värde //
    monthlyCost.innerHTML = (monthlyCostSum * 1).toFixed(2);
}