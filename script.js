let sumSlider = document.getElementById("sumSlider");
let sumOutput = document.getElementById("summa");
let yearSlider = document.getElementById("yearSlider");
let yearOutput = document.getElementById("year");

sumOutput.innerHTML = sumSlider.value;

sumSlider.oninput = function(){
    sumOutput.innerHTML = this.value
}

yearOutput.innerHTML = yearSlider.value;

yearSlider.oninput = function(){
    yearOutput.innerHTML = this.value;
}